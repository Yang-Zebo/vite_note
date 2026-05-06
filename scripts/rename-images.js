#!/usr/bin/env node

import { readdirSync, renameSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = join(__dirname, '..', 'docs')

const IMAGE_NAME_MAP = {
  // Git 相关
  'gongzuo.png': 'workspace.png',
  'quxiao.png': 'discard-changes.png',
  'zancun.png': 'staging-area.png',
  'huancun1.png': 'cache-overview.png',
  'huancun2.png': 'cache-force-fail.png',
  'huancun3.png': 'cache-negotiate-fail.png',
  'huancun4.png': 'cache-force-success.png',
  'huancun5.png': 'cache-negotiate-success1.png',
  'huancun6.png': 'cache-negotiate-success2.png',
  'huancun7.png': 'cache-flow-summary.png',
  'woshou.png': 'three-way-handshake.png',
  'huishou.png': 'four-way-wave.png',
  'fasong.png': 'http-request-send.png',
  'digui.png': 'dns-recursive.png',
  'diedai.png': 'dns-iterative.png',
  'master.png': 'master-branch.png',
  'branch_dev.png': 'dev-branch.png',
  'dev_commit.png': 'dev-commit.png',
  'branch_master.png': 'back-to-master.png',
  'merge_dev.png': 'merge-dev.png',
  'del_dev.png': 'delete-dev.png',
  'commit_feature1.png': 'feature1-commit.png',
  'conflict.png': 'merge-conflict.png',
  'after_merge.png': 'after-merge.png',
  'gitClone.png': 'git-clone.png',
  // JavaScript 相关
  'bubbling.png': 'event-bubbling.png',
  'prototype1.jpg': 'prototype-chain-basic.jpg',
  'prototype2.jpg': 'prototype-chain-advanced.jpg',
}

function renameImagesInDir(dir, stats = { renamed: 0, updated: 0 }) {
  const entries = readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    
    if (entry.isDirectory()) {
      renameImagesInDir(fullPath, stats)
    } else if (/\.(png|jpg|jpeg|gif|webp)$/i.test(entry.name)) {
      const newName = IMAGE_NAME_MAP[entry.name]
      if (newName) {
        const newPath = join(dir, newName)
        renameSync(fullPath, newPath)
        stats.renamed++
        console.log(`🖼️  Renamed: ${entry.name} -> ${newName}`)
      }
    }
  }
  
  return stats
}

function updateImageReferencesInFile(filePath) {
  let content = readFileSync(filePath, 'utf-8')
  let changed = false
  
  for (const [oldName, newName] of Object.entries(IMAGE_NAME_MAP)) {
    const regex = new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
    if (regex.test(content)) {
      content = content.replace(regex, newName)
      changed = true
    }
  }
  
  if (changed) {
    writeFileSync(filePath, content, 'utf-8')
    return true
  }
  return false
}

function walkAndUpdateRefs(dir, stats = { filesUpdated: 0 }) {
  const entries = readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    
    if (entry.isDirectory()) {
      walkAndUpdateRefs(fullPath, stats)
    } else if (entry.name.endsWith('.md')) {
      if (updateImageReferencesInFile(fullPath)) {
        stats.filesUpdated++
      }
    }
  }
  
  return stats
}

console.log('🔄 Step 1: Renaming images...\n')
const renameStats = renameImagesInDir(docsDir)
console.log(`\n✅ Renamed ${renameStats.renamed} images\n`)

console.log('🔄 Step 2: Updating references in markdown files...\n')
const refStats = walkAndUpdateRefs(docsDir)
console.log(`\n✅ Updated ${refStats.filesUpdated} files\n`)

console.log('✨ All done!')
