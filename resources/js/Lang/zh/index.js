export default {
    auth: {
        email: "电子邮件",
        password: "密码",
        rememberMe: "记得我",
        forgotPassword: "忘记密码了吗？",
        login: "登录",
        logout: "登出",
        register: "登记",
        validationMessage: {
            email: {
                required: "电子邮件字段是必需的",
                email: "电子邮件必须是有效的电子邮件地址"
            },
            password: {
                required: "密码字段为必填项"
            }
        }
    },
    general: {
        brandName: "LaraQuality",
        /* Theme */
        darkMode: "黑暗主题",
        lightMode: "轻主题",
        auto: "自动的",
        /* Error */
        somethingWentWrong: "哎呀！出事了",
        /* Simple Terms */
        save: '保存',
        reset: '重启',
        cancel: '取消',
        delete: '删除',
        edit: '编辑',
        view: '看法'
    },
    mainMenu: {
        authPages: "认证页面",
        authLogin: "登录",
        authRegister: "登记",
        authForgotPassword: "忘记密码",
        authLockScreen: "锁屏",
        authProfile: "轮廓",
        components: "成分",
        componentAlert: "警报",
        componentAvatar: "阿凡达",
        componentBadge: "徽章",
        componentBreadcrumb: "面包屑",
        componentButton: "按钮",
        componentCollapsible: "可折叠",
        componentContentBox: "内容框",
        componentDropdown: "落下",
        componentList: "列表",
        componentLoading: "正在加载",
        componentModal: "模态",
        componentPagination: "分页",
        componentProgressBar: "进度条",
        componentStatisticWidget: "统计小部件",
        componentTab: "标签",
        componentTable: "桌子",
        componentTableJson: "表(JSON)",
        componentTableBackend: "表(BackEnd)",
        componentTooltip: "工具提示",
        layoutElements: "布局元素",
        layoutStructure: "布局结构",
        layoutGrid: "网格",
        formElements: "表单元素",
        formStructure: "表格结构",
        formInputGroup: "输入组",
        formSimpleInputs: "简单输入",
        formRepeatableInput: "可重复输入",
        formDateTimeInput: "日期/时间输入",
        formSelectInput: "选择输入",
        externalSources: "外部来源",
        externalGitHubRepo: 'Github 回购',
        externalTailwindcssDocument: "TailwindCSS 文档",
        externalVuejsDocument: "Vuejs 文档",
        externalInertiaDocument: "Inertiajs 文档",
        externalLaravelDocument: "Laravel 文档",
        footerHelp: "帮助",
        footerSettings: "设置"
    },
    userMenu: {
        manageAccount: "Manage Account",
        manageTeam: "Manage Team",
        switchTeams: "Switch Team",
        language: "Language",
        darkMode: "Dark Mode",
        profile: "Profile",
        api: "API Tokens",
        teamSettings: "Team Settings",
        createNewTeam: "Create New Team",
        auto: "Auto",
        dark: "Dark",
        light: "Light",
        logout: "Logout"
    },
    notification: {
        pendingWorks: '待定作品',
        unfinishedTodos: '正在进行的待办事项',
        unreadMessages: '未读消息'
    },
    component: {
        table: {
            searchPlaceHolder: "搜索",
            optionsModalTitle: "表选项",
            optionsModalColumnOrder: "列顺序和可见性",
            anyContentMessage: "有符合您搜索条件的任何内容",
            advancedSearch: "高级搜索",
            itemsCountPerPage: "页面中的项目数",
            actionView: "看法",
            actionEdit: "编辑",
            actionDelete: "删除",
            missing: "丢失的",
            contentKeyError: "内容密钥丢失，请添加内容密钥。 它来自控制器。 <br>示例：'<b><i>用户</i></b>'=>Users::all()",
            searchRouteError: "缺少搜索路径，请添加搜索路径。 搜索路由是搜索参数发布的路由（同一页面路由），如<b><i>user。 索引</i></b>。",
            contentError: "内容缺失，请添加内容数据集。 它来自控制器。 <br>示例：'<b><i>用户</i></b>'=>Users::all()",
            headerError: "标头丢失，请添加标头数据集。 该表需要它来显示数据列。"
        },
        pagination: {
            detailText: "{totalPage} 页 - {totalRecord} 条记录",
            previous: "以前的",
            next: "下一个"
        }
    }
};
