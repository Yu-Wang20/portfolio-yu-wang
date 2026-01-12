# Lanyard 组件资源信息

## 依赖
- three
- meshline
- @react-three/fiber
- @react-three/drei
- @react-three/rapier

## 资源文件
1. card.glb - 3D 卡片模型，可从 repo 的 src/assets/lanyard 下载
2. lanyard.png - 挂绳纹理图片

## Vite 配置
需要在 vite.config.js 中添加:
```js
assetsInclude: ['**/*.glb']
```

## 资源下载地址
GitHub repo: https://github.com/DavidHDev/react-bits
路径: src/assets/lanyard/
