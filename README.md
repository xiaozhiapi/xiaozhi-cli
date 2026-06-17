# xiaozhi-cli (小智 CLI)

> 跨 AI 编码工具的「智能体配置 / 工具集」安装器。一条命令，把一整套 agents、skills、commands、rules、hooks 装进你的 AI 编码 harness。

**支持的 harness：** Claude Code · Codex · Cursor · OpenCode · Gemini · Zed · GitHub Copilot 等。

---

## 这是什么

`xiaozhi-cli` 提供一套可复用的智能体工程资产，并通过选择式安装器把它们装到你正在用的 AI 编码工具里：

- **agents/** — 预设子智能体（architect、code-reviewer、build-error-resolver…）
- **skills/** — 技能模块（安全审计、测试、各语言模式、研究…）
- **commands/** — 斜杠命令（code-review、build-fix、checkpoint…）
- **rules/** — 各语言编码规则
- **hooks/** — 钩子（记忆持久化、状态栏、上下文监控…）
- **mcp-configs/** — MCP 服务器配置

---

## 安装

```bash
npm install -g xiaozhi-cli
```

## 使用

```bash
# 查看可安装的组件与配置档
xiaozhi catalog

# 安装到当前项目 / 指定 harness
xiaozhi install

# 安装计划预览（不落盘）
xiaozhi --dry-run install

# 体检 / 修复已安装内容
xiaozhi doctor
xiaozhi repair

# 升级到最新并重装当前托管的目标
xiaozhi auto-update

# 完整命令
xiaozhi --help
```

> 常用命令：`install` · `plan` · `catalog` · `consult` · `list-installed` · `doctor` · `repair` · `auto-update` · `status`。

---

## 要求

- Node.js ≥ 20
- 安装到哪个 harness，就需要对应工具（Claude Code / Codex / Cursor …）。

---

## 致谢与许可（重要）

本项目基于开源项目 **[ECC](https://github.com/affaan-m/ECC)**（作者 **Affaan Mustafa**，MIT 许可）二次开发、改名而来。原始版权与 MIT 许可证完整保留于 [`LICENSE`](LICENSE) 与 [`NOTICE`](NOTICE)。

- 许可证：**MIT**（见 [LICENSE](LICENSE)）。
- 本仓库 `xiaozhi-cli` 为独立改名版本，与上游 ECC 项目无隶属关系；上游的官网、徽章、GitHub App、赞助计划等均不适用于本仓库。

如果这套工具对你有用，也欢迎去给原项目 [ECC](https://github.com/affaan-m/ECC) 点个 star。
