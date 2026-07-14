# SanaRom Frida Scripts

这个仓库用于向 SanaRom App 的 Frida 脚本库分发常用 JavaScript 脚本。

## 目录结构

```text
SanaRomFridaScripts/
├── README.md
└── scripts/
    └── example-app-info.js
```

## 使用规则

1. 所有可同步脚本统一放在仓库根目录的 `scripts/` 文件夹中。
2. SanaRom 只读取 `scripts/` 第一层的 `.js` 文件，不递归读取子目录。
3. 文件名会直接作为 SanaRom 脚本库中的脚本名称。
4. 非 `.js` 文件、子目录和空脚本会被忽略。
5. 同名文件直接更新内容后重新提交，SanaRom 下次同步时会覆盖对应的 GitHub 脚本。
6. 从 `scripts/` 删除文件后，SanaRom 下次同步时也会移除对应的 GitHub 脚本；手动添加的本地脚本不会受影响。

## App 中同步

进入 `Frida 脚本库`，点击右上角的“同步”。同步成功后，可以像本地脚本一样预览、编辑或选择 GitHub 脚本。

## 示例脚本

`scripts/example-app-info.js` 会在目标应用加载后输出：

- 包名
- 当前进程名
- APK 路径
- 应用数据目录

脚本包含 `Java.available` 和异常处理，可作为新增脚本的基础模板。
