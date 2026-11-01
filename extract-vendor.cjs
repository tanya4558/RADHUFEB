// One-time offline extractor: pulls React UMD builds from the npm cache into ./vendor
const path = require('path')
const fs = require('fs')
const zlib = require('zlib')

const npmModules = path.join(path.dirname(process.execPath), 'node_modules', 'npm', 'node_modules')
const cacache = require(path.join(npmModules, 'cacache'))
const tar = require(path.join(npmModules, 'tar'))

const { execSync } = require('child_process')
const cachePath = path.join(execSync('npm config get cache', { encoding: 'utf8' }).trim(), '_cacache')

const vendor = path.join(process.cwd(), 'vendor')
fs.mkdirSync(vendor, { recursive: true })

const items = [
  { integrity: 'sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==', pick: 'package/umd/react.production.min.js', out: 'react.production.min.js' },
  { integrity: 'sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==', pick: 'package/umd/react-dom.production.min.js', out: 'react-dom.production.min.js' },
]

async function run() {
  for (const item of items) {
    const data = await cacache.get.byDigest(cachePath, item.integrity)
    const tgz = path.join(vendor, '_tmp.tgz')
    fs.writeFileSync(tgz, data)
    await tar.x({ file: tgz, cwd: vendor, filter: (p) => p === item.pick })
    const extracted = path.join(vendor, ...item.pick.split('/'))
    fs.copyFileSync(extracted, path.join(vendor, item.out))
    fs.rmSync(path.join(vendor, 'package'), { recursive: true, force: true })
    fs.rmSync(tgz, { force: true })
    console.log('extracted', item.out)
  }
}

run().catch((e) => { console.error(e); process.exit(1) })
