This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 功能点

### 打开链接按钮功能

#### 1.通过返利链接进入淘宝页面（待调研）

#### 2.一键复制返利链接

### 1. 建立返利链接与自定义路由映射至 mangodb

#### 1.1 复制返利链接，点击生成自定义路由

#### 1.2 显示生成的自定义路由

#### 1.3 点击保存，将返利链接与生成的路由保存至 mangodb

### 2. 动态路由显示产品信息、按钮

#### 2.1 通过动态路由获取产品 id

#### 2.2 根据产品 id 获取产品详情图

#### 2.3 按钮显示，跳转至淘宝链接

mongodb 保存 collection
id:number
url:string
code:string（返利链接） 7(cZ3J3EzZxGB)/:/ CZ1234

需求：
通过 URL 访问到对应产品的链接，
product——商品 ID
URL——xxxx/dashboard/:product
mongodb 通过商品 ID 查询到邀请码
model:{id, productid, code}
