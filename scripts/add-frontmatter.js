#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = join(__dirname, '..', 'docs', 'guide')

const TAG_MAP = {
  'JavaScript/Basic': ['JavaScript', '基础'],
  'JavaScript/Advanced': ['JavaScript', '进阶'],
  'JavaScript/Objects': ['JavaScript', '内置对象'],
  'JavaScript/TypeScript': ['TypeScript'],
  'JavaScript/WebApi': ['Web API'],
  'NodeJs/NodeApi': ['Node.js'],
  'NodeJs/SQL': ['SQL', '数据库'],
  'Frame/Vue': ['Vue'],
  'Frame/React': ['React'],
  'Others/Expand': ['扩展'],
  'Others/Webpack': ['Webpack'],
}

function getTags(filePath) {
  for (const [path, tags] of Object.entries(TAG_MAP)) {
    if (filePath.includes(path)) return tags
  }
  return ['前端']
}

function getTitle(content) {
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : ''
}

function hasFrontmatter(content) {
  return content.trim().startsWith('---')
}

function processMdFile(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  
  if (hasFrontmatter(content)) return false
  
  const title = getTitle(content)
  if (!title) return false
  
  const tags = getTags(filePath)
  
  const frontmatter = `---
title: ${title}
tags: [${tags.map(t => `"${t}"`).join(', ')}]
---

`
  writeFileSync(filePath, frontmatter + content, 'utf-8')
  return true
}

function walkDir(dir, count = { processed: 0, skipped: 0 }) {
  const entries = readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    
    if (entry.isDirectory()) {
      walkDir(fullPath, count)
    } else if (entry.name.endsWith('.md')) {
      const processed = processMdFile(fullPath)
      if (processed) {
        count.processed++
        console.log(`✅ ${fullPath.replace(docsDir, '')}`)
      } else {
        count.skipped++
      }
    }
  }
  
  return count
}

console.log('📝 Adding frontmatter to markdown files...\n')
const result = walkDir(docsDir)
console.log(`\n✨ Done! Processed: ${result.processed}, Skipped (already has frontmatter): ${result.skipped}`)
