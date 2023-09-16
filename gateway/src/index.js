import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

app.use(
  '/characters',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
  })
)

app.use(
  '/films',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true
  })
)

app.use(
  '/planets',
  createProxyMiddleware({
    target: 'http://localhost:3003',
    changeOrigin: true
  })
)

app.listen(3000, () => {
  console.log('Gateway listening on port 3000')
})
