#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = join(__dirname, '..', 'docs', 'guide')

function fixExtraCodeBlock(filePath) {
  let content = readFileSync(filePath, 'utf-8')
  
  const regex = /^---\n([\s\S]*?)---\n\n```\n(# .+)$/m
  if (regex.test(content)) {
    content = content.replace(regex, '---\n$1---\n\n$2')
    writeFileSync(filePath, content, 'utf-8')
    return true
  }
  return false
}

function walkDir(dir, count = { fixed: 0 }) {
  const entries = readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    
    if (entry.isDirectory()) {
      walkDir(fullPath, count)
    } else if (entry.name.endsWith('.md')) {
      if (fixExtraCodeBlock(fullPath)) {
        count.fixed++
        console.log(`✅ ${fullPath.replace(docsDir, '')}`)
      }
    }
  }
  
  return count
}

console.log('🔍 Searching for files with extra code block after frontmatter...\n')
const result = walkDir(docsDir)
console.log(`\n✨ Done! Fixed ${result.fixed} files.`)
