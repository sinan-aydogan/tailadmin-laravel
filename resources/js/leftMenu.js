export const leftMenu = {
  data(){
    return {
      leftMenuLinks: [
        {
          label: "Github Repo",
          icon: "code",
          link: "https://github.com/sinan-aydogan/tailadmin-laravel",
          type: "external"
        },
        {
          label: "leftMenu.authPages.authPages",
          icon: "tv",
          link: "",
          type: "dropdown",
          items: [
            {
              label: "leftMenu.authPages.login",
              icon: "",
              link: "login-app",
              type: "route"
            },
            {
              label: "leftMenu.authPages.register",
              icon: "",
              link: "register-app",
              type: "route"
            }, {
              label: "leftMenu.authPages.forgotPassword",
              icon: "",
              link: "forgot-password-app",
              type: "route"
            },
            {
              label: "leftMenu.authPages.lockScreen",
              icon: "",
              link: "lock-app",
              type: "route"
            },
            {
              label: "leftMenu.authPages.profile",
              icon: "",
              link: "profile.show",
              type: "route"
            }
            /*{
                label: "Pricing",
                icon: "",
                link: "pricing",
                type: "route",
                activeKey: ["pricing"],
            },
            {
                label: "Project App",
                icon: "",
                link: "project-management-app",
                type: "route",
                activeKey: ["project-management-app"],
            },
            {
                label: "Todo App",
                icon: "",
                link: "todo-app",
                type: "route",
                activeKey: ["todo-app"],
            },
            {
                label: "Email App",
                icon: "",
                link: "email-app",
                type: "route",
                activeKey: ["email-app"],
            },
            {
                label: "Chat App",
                icon: "",
                link: "chat-app",
                type: "route",
                activeKey: ["chat-app"],
            }*/
          ]
        },
        {
          label: "leftMenu.components.components",
          icon: "plug",
          link: "",
          type: "dropdown",
          items: [
            {
              label: "leftMenu.components.alert",
              icon: "",
              link: "alert",
              type: "route"
            },
            {
              label: "leftMenu.components.avatar",
              icon: "",
              link: "avatar",
              type: "route"
            },
            {
              label: "leftMenu.components.badge",
              icon: "",
              link: "badge",
              type: "route"
            },
            {
              label: "leftMenu.components.breadcrumb",
              icon: "",
              link: "breadcrumb",
              type: "route"
            },
            {
              label: "leftMenu.components.button",
              icon: "",
              link: "button",
              type: "route"
            },
            /* TODO: Create Chart Component
            {
                 label: "Chart",
                 icon: "chart-bar",
                 link: "chart",
                 type: "route",
                 activeKey: ["chart"],
             },*/
            {
              label: "leftMenu.components.collapsible",
              icon: "",
              link: "collapsible",
              type: "route"
            },
            {
              label: "leftMenu.components.dropdown",
              icon: "",
              link: "dropdown",
              type: "route"
            },
            {
              label: "leftMenu.components.list",
              icon: "",
              link: "list",
              type: "route"
            },
            {
              label: "leftMenu.components.loading",
              icon: "",
              link: "loading",
              type: "route"
            },
            {
              label: "leftMenu.components.modal",
              icon: "",
              link: "modal",
              type: "route"
            },
            {
              label: "leftMenu.components.pagination",
              icon: "",
              link: "pagination",
              type: "route"
            },
            {
              label: "leftMenu.components.popover",
              icon: "",
              link: "popover",
              type: "route"
            },
            {
              label: "leftMenu.components.progressBar",
              icon: "",
              link: "progress",
              type: "route"
            },
            {
              label: "leftMenu.components.statisticWidget",
              icon: "chart-bar",
              link: "layout-statistic-widget",
              type: "route"
            },
            {
              label: "leftMenu.components.tab",
              icon: "",
              link: "tab",
              type: "route"
            },
            {
              label: "leftMenu.components.tableJson",
              icon: "table",
              link: "table",
              type: "route"
            },
            {
              label: "leftMenu.components.tableBackend",
              icon: "table",
              link: "back-end-table",
              type: "route"
            },
            /* TODO: Toastr Feature
            {
              label: "Toastr",
              icon: "",
              link: "toastr",
              type: "route",
              activeKey: ["toastr"],
            },
            */
            {
              label: "leftMenu.components.tooltip",
              icon: "",
              link: "tooltip",
              type: "route"
            }
          ]
        },
        {
          label: "leftMenu.layoutElements.layoutElements",
          icon: "window-maximize",
          link: "",
          type: "dropdown",
          items: [
            {
              label: "leftMenu.layoutElements.layoutStructure",
              icon: "layer-group",
              link: "layout-structure",
              type: "route"
            },
            {
              label: "leftMenu.layoutElements.grid",
              icon: "grip-horizontal",
              link: "layout-grid",
              type: "route"
            },
            {
              label: "leftMenu.layoutElements.contentCard",
              icon: "window-restore",
              link: "layout-content-box",
              type: "route"
            },
            {
              label: "leftMenu.layoutElements.tailwindcssDocument",
              icon: "code",
              link: "https://tailwindcss.com/docs",
              type: "external"
            }
          ]
        },
        {
          label: "leftMenu.formElements.formElements",
          icon: "edit",
          link: "",
          type: "dropdown",
          items: [
            {
              label: "leftMenu.formElements.formStructure",
              icon: "",
              link: "form-structure",
              type: "route"
            },
            {
              label: "leftMenu.formElements.inputGroup",
              icon: "",
              link: "form-input-group",
              type: "route"
            },
            {
              label: "leftMenu.formElements.simpleInputs",
              icon: "",
              link: "form-simple-field",
              type: "route"
            },
            {
              label: "leftMenu.formElements.repeatableInput",
              icon: "retweet",
              link: "form-repeatable-field",
              type: "route"
            },
            {
              label: "leftMenu.formElements.inlineRepeatableInput",
              icon: "retweet",
              link: "form-inline-repeatable-field",
              type: "route"
            },
            {
              label: "leftMenu.formElements.dateTimeInput",
              icon: "clock",
              link: "form-date-field",
              type: "route"
            },
            {
              label: "leftMenu.formElements.selectInput",
              icon: "",
              link: "form-select-input",
              type: "route"
            },
            {
              label: "leftMenu.formElements.multiSelectInput",
              icon: "",
              link: "form-multi-select-input",
              type: "route"
            }/* TODO: Tag Input Feature
        {
            label: "Tags Input",
            icon: "tags",
            link: "form-tag-input",
            type: "route",
            activeKey: ["tag-input-field"],
        },
        */
            /* TODO: Validation Feature
            {
                label: "Validation",
                icon: "",
                link: "form-validation",
                type: "route",
                activeKey: ["form-validation"],
            },*/
          ]
        }
      ]
    }
  }
};
