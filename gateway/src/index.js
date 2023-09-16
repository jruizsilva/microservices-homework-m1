import express from 'express'
import morgan from 'morgan'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

app.use(morgan('dev'))
app.use(
  '/characters',
  createProxyMiddleware({
    target: 'http://characters:3001',
    changeOrigin: true
  })
)

app.use(
  '/films',
  createProxyMiddleware({
    target: 'http://films:3002',
    changeOrigin: true
  })
)

app.use(
  '/planets',
  createProxyMiddleware({
    target: 'http://planets:3003',
    changeOrigin: true
  })
)

app.listen(3000, () => {
  console.log('Gateway listening on port 3000')
})
