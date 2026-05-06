#!/usr/bin/env node

import { existsSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsDir = join(__dirname, '..', 'docs')

function getAllImages(dir, fileList = []) {
  if (!existsSync(dir)) return fileList

  const files = readdirSync(dir)
  files.forEach(file => {
    const filePath = join(dir, file)
    const stat = statSync(filePath)
    if (stat.isDirectory()) {
      getAllImages(filePath, fileList)
    } else if (/\.(png|jpg|jpeg|gif|webp)$/i.test(file)) {
      const size = stat.size
      fileList.push({ path: filePath, size, name: file })
    }
  })
  return fileList
}

console.log('📊 Scanning images in docs folder...\n')

const images = getAllImages(docsDir)

if (images.length === 0) {
  console.log('No images found.')
  process.exit(0)
}

const totalSize = images.reduce((sum, img) => sum + img.size, 0)
const maxSize = 500 * 1024 // 500KB warning threshold

console.log(`Found ${images.length} images, total size: ${(totalSize / 1024).toFixed(2)} KB\n`)

console.log('📁 Image files:')
images.forEach((img, index) => {
  const sizeKB = (img.size / 1024).toFixed(2)
  const relativePath = img.path.replace(docsDir, '')
  const warning = img.size > maxSize ? ' ⚠️  Large file!' : ''
  console.log(`  ${index + 1}. ${relativePath} (${sizeKB} KB)${warning}`)
})

console.log('\n💡 Optimization suggestions:')
console.log('  1. Use WebP format for better compression')
console.log('  2. Compress images with tools like:')
console.log('     - ImageOptim (Mac)')
console.log('     - TinyPNG (https://tinypng.com)')
console.log('     - squoosh (https://squoosh.app)')
console.log('  3. Use responsive images with srcset for different screen sizes')
console.log('  4. Consider lazy loading for below-the-fold images')
console.log('')
