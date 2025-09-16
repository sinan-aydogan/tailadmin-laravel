<template>
    <app-layout title="Dashboard" :header="tm('title')">
        <template #breadcrumb>
            <t-breadcrumb :breadcrumb-style="1" :breadcrumbs="breadcrumbs" color="white"/>
        </template>
        <template #default>
            <!--Statistical Widgets-->
            <grid-section :col="2">
                <!--With Icon, Down Direction-->
                <t-statistic-widget
                    color="solid-black"
                    diff-direction="down"
                    diff-value="15%"
                    widget-value="254">
                    <template #title>
                        <span v-text="tm('incomes')"/>
                    </template>
                    <template #icon>
                        <t-cash-icon class="w-16 h-16"/>
                    </template>
                </t-statistic-widget>
                <!--With Icon, Up Direction-->
                <t-statistic-widget
                    :radius="5"
                    color="solid-green"
                    diff-direction="up"
                    diff-value="8"
                    widget-value="30">
                    <template #title>
                        <span v-text="tm('dailyDoneCharts')"/>
                    </template>
                    <template #icon>
                        <t-shopping-bag-icon class="w-16 h-16"/>
                    </template>
                </t-statistic-widget>
                <!--Simple-->
                <t-statistic-widget
                    :radius="5"
                    color="solid-red"
                    diff-direction="down"
                    diff-value="8%"
                    widget-value="12.254,05 TL">
                    <template #title>
                        <span v-text="tm('refunds')"/>
                    </template>
                </t-statistic-widget>
                <!--With Picture, Down Direction-->
                <t-statistic-widget
                    :radius="5"
                    color="solid-white"
                    diff-direction="down"
                    diff-value="15%"
                    widget-value="254 USD">
                    <template #title>
                        <span v-text="tm('stationeryCost')"/>
                    </template>
                    <template #picture>
                        <img :src="'/img/samples/imgMelBaylon-6WLcOFn4HKE-unsplash.jpg'">
                    </template>
                </t-statistic-widget>
            </grid-section>
            <!--Content Box-->
            <grid-section :col="3">
                <!--List-->
                <t-content-card :width="1">
                    <template #title>
                        <span v-text="tm('userList')"/>
                    </template>
                    <template #content>
                        <t-list :radius="3" class="w-full" design="light" color="white" border>
                            <t-list-item>
                                <template #icon>
                                    <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=1"></t-avatar>
                                </template>
                                <template #default>{{tm('name1')}}</template>
                            </t-list-item>
                            <t-list-item>
                                <template #icon>
                                    <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=2"></t-avatar>
                                </template>
                                <template #default>{{tm('name2')}}</template>
                            </t-list-item>
                            <t-list-item>
                                <template #icon>
                                    <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=3"></t-avatar>
                                </template>
                                <template #default>{{tm('name3')}}</template>
                            </t-list-item>
                            <t-list-item>
                                <template #icon>
                                    <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=4"></t-avatar>
                                </template>
                                <template #default>{{tm('name4')}}</template>
                            </t-list-item>
                        </t-list>
                    </template>
                </t-content-card>
                <t-content-card :width="2">
                    <template #title>
                        <span v-text="tm('activeProjects')"/>
                    </template>
                    <template #content>
                        <!--Table-->
                        <t-table
                            :content="tableContent"
                            :header="tableHeader"
                            :features="tableFeatures"
                        >
                            <template #status="{props}">
                                <div class="flex justify-center">
                                    <t-progress :model-value="props.status" color="green"/>
                                </div>
                            </template>
                        </t-table>
                    </template>
                </t-content-card>
            </grid-section>
            <!--Alerts-->
            <grid-section :col-tablet="3">
                <!--Red-Deleted-->
                <t-alert design="filled" :closeable="true" color="danger">
                    <template #icon>
                        <t-trash-icon slot="icon" class="w-6 h-6"/>
                    </template>
                    <span v-text="tm('alertDeleted')"/>
                </t-alert>
                <!--Blue-Info-->
                <t-alert design="inline" color="info">
                    <template #icon>
                        <t-information-circle-icon class="w-6 h-6"/>
                    </template>
                    <span v-text="tm('alertOverwrite')"/>
                </t-alert>
                <!--Green Success-->
                <t-alert design="outline" color="success">
                    <template #icon>
                        <t-check-circle-icon class="w-6 h-6"/>
                    </template>
                    <span v-text="tm('alertSaved')"/>
                </t-alert>
            </grid-section>
            <!--Rich Alerts-->
            <grid-section :col-tablet="2">
                <t-alert :radius="3" design="gradient" color="fuchsia" :closeable="true">
                    <template #icon>
                        <t-avatar :radius="8" :size="3" src="https://i.pravatar.cc/300"/>
                    </template>
                    <span v-html="tm('alertNewUser')"/>
                </t-alert>
                <t-alert
                    :radius="3"
                    design="elegant"
                    :title="tm('alertDeletedUserTitle')"
                    color="warning"
                    :closeable="true"
                >
                    <span v-html="tm('alertDeletedUser')"/>
                </t-alert>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
/*Main functions*/
import {defineComponent, reactive} from "vue";

/*Components*/
import AppLayout from "@/Layouts/AppLayout.vue";
import GridSection from "@/Layouts/GridSection.vue";
import TStatisticWidget from "@/Components/Card/TStatisticWidget.vue";
import TCashIcon from "@/Components/Icon/TCashIcon.vue";
import TShoppingBagIcon from "@/Components/Icon/TShoppingBagIcon.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TList from "@/Components/List/TList.vue";
import TListItem from "@/Components/List/TListItem.vue";
import TAvatar from "@/Components/Avatar/TAvatar.vue";
import TTable from "@/Components/Table/TTable.vue";
import TBreadcrumb from "@/Components/Breadcrumb/TBreadcrumb.vue";
import TProgress from "@/Components/Progress/TProgress.vue";
import TAlert from "@/Components/Alert/TAlert.vue";
import TInformationCircleIcon from "@/Components/Icon/TInformationCircleIcon.vue";
import TTrashIcon from "@/Components/Icon/TTrashIcon.vue";
import TCheckCircleIcon from "@/Components/Icon/TCheckCircleIcon.vue";

/*Multi language*/
import {useI18n} from "vue-i18n";

export default defineComponent({
    components: {
        AppLayout,
        TCheckCircleIcon,
        TTrashIcon,
        TInformationCircleIcon,
        TAlert,
        TProgress,
        TBreadcrumb,
        TTable,
        TAvatar,
        TListItem,
        TList,
        TContentCard,
        TShoppingBagIcon,
        TCashIcon,
        TStatisticWidget,
        GridSection
    },
    setup() {
        const {tm} = useI18n({
            messages: {
                bg: {
                    title: "Добре дошли в Anemon",
                    home: "Дом",
                    dashboard: "Табло за управление",
                    incomes: "Доходи",
                    dailyDoneCharts: "Дневни графики",
                    refunds: "Възстановявания",
                    stationeryCost: "Възстановяване на средства",
                    userList: "Списък с потребители",
                    activeProjects: "Активни проекти",
                    name: "Име",
                    startDate: "Начална дата",
                    endDate: "Крайна дата",
                    status: "Състояние",
                    simpleSearch: "Просто търсене",
                    name1: "Siyan Alekov Hristov",
                    name2: "Brayko Vasilov Atanasov",
                    name3: "Mihaela Demitrova Tsankova",
                    name4: "Tanya Iskrenova Adamova",
                    alertDeleted: "Потребителят е изтрит успешно, щракнете върху мен",
                    alertOverwrite: "Всички промени се презаписват върху себе си",
                    alertSaved: "Нов елемент е запазен успешно",
                    alertNewUser: "Новият потребител е добавен успешно\n" +
                        "<b>Потребител:</b> Sinan AYDOĞAN",
                    alertDeletedUserTitle: "предупреждение",
                    alertDeletedUser: "Потребителят е изтрит успешно\n" +
                        "<b>Потребител:</b> Zuhal TAŞÇI"
                },
                de: {
                    title: "Willkommen bei Anemon",
                    home: "zu Hause",
                    dashboard: "Dashboard",
                    incomes: "Einkommen",
                    dailyDoneCharts: "Daily Done Charts",
                    refunds: "Rückerstattungen",
                    stationeryCost: "Erstattungen",
                    userList: "Benutzerliste",
                    activeProjects: "Aktive Projekte",
                    name: "Name",
                    startDate: "Startdatum",
                    endDate: "Enddatum",
                    status: "Zustand",
                    simpleSearch: "Einfache Suche",
                    name1: "Siyan Alekov Hristov",
                    name2: "Victor Bergius",
                    name3: "Jessi Nachtigal",
                    name4: "Silvia Krauss",
                    alertDeleted: "Der Benutzer wurde erfolgreich gelöscht, klick mich an",
                    alertOverwrite: "Alle Änderungen überschreiben sich selbst",
                    alertSaved: "Neues Element erfolgreich gespeichert",
                    alertNewUser: "Der neue Benutzer wurde erfolgreich hinzugefügt." +
                        "<br/><b>Benutzer:</b> Sinan AYDOĞAN",
                    alertDeletedUserTitle: "Warnung",
                    alertDeletedUser: "Der Benutzer wurde erfolgreich gelöscht" +
                        "<br/><b>Benutzer:</b> Zuhal TAŞÇI"
                },
                en: {
                    title: "Welcome to Anemon",
                    home: "Home",
                    dashboard: "Dashboard",
                    incomes: "Incomes",
                    dailyDoneCharts: "Daily Done Charts",
                    refunds: "Refunds",
                    stationeryCost: "Refunds",
                    userList: "Users List",
                    activeProjects: "Active Projects",
                    name: "Name",
                    startDate: "Start Date",
                    endDate: "End Date",
                    status: "Status",
                    simpleSearch: "Simple Search",
                    name1: "Sinem Aydoğan",
                    name2: "Reema Oconnor",
                    name3: "Mia-Rose Justice",
                    name4: "Louise Watts",
                    alertDeleted: "The user deleted successfully,click me",
                    alertOverwrite: "The all of changes overwrite to themself",
                    alertSaved: "New item saved successfully",
                    alertNewUser: "The new user is successfully added." +
                        "<br/><b>User:</b> Sinan AYDOĞAN",
                    alertDeletedUserTitle: "warning",
                    alertDeletedUser: "The user deleted successfully" +
                        "<br/><b>User:</b> Zuhal TAŞÇI"
                },
                tr: {
                    title: "Anemon'a Hoşgeldiniz",
                    home: "Ana Sayfa",
                    dashboard: "Panel",
                    incomes: "Gelirler",
                    dailyDoneCharts: "Günlük Tamamlanan",
                    refunds: "Geri İadeler",
                    stationeryCost: "Kırtasiye Gideri",
                    userList: "Kullanıcılar",
                    activeProjects: "Aktif Projeler",
                    name: "İsim",
                    startDate: "Başlangıç",
                    endDate: "Bitiş",
                    status: "Durum",
                    simpleSearch: "Arama",
                    name1: "Sinem Aydoğan",
                    name2: "Zuhal Taşçı",
                    name3: "Ayşe Gürel",
                    name4: "Günel Deren",
                    alertDeleted: "Kullanıcı başarıyla silindi",
                    alertOverwrite: "Tüm değişikler var olan kayıdın üzerine yazılacak",
                    alertSaved: "Yeni içerik başarıyla eklendi",
                    alertNewUser: "Yeni kullanıcı başarıyla eklendi\n" +
                        "<b>Kullanıcı:</b> Sinan AYDOĞAN",
                    alertDeletedUserTitle: "uyarı",
                    alertDeletedUser: "Kullanıcı başarıyla silindi\n" +
                        "<b>Kullanıcı:</b> Zuhal TAŞÇI"
                },
                ru: {
                    title: "Добро пожаловать в Анемон",
                    home: "Дом",
                    dashboard: "Панель приборов",
                    incomes: "Доходы",
                    dailyDoneCharts: "Ежедневные диаграммы",
                    refunds: "Возвраты",
                    stationeryCost: "Возврат",
                    userList: "Список пользователей",
                    activeProjects: "Активные проекты",
                    name: "Имя",
                    startDate: "Дата начала",
                    endDate: "Дата окончания",
                    status: "Статус",
                    simpleSearch: "Простой поиск",
                    name1: "Siyan Alekov Hristov",
                    name2: "Shepkin Onufri Victorovich",
                    name3: "Eybozhenko Lada Nikolayevna",
                    name4: "Mager Vlada Makarovna",
                    alertDeleted: "Пользователь успешно удален, нажмите на меня",
                    alertOverwrite: "Все изменения перезаписываются на себя",
                    alertSaved: "Новый элемент успешно сохранен",
                    alertNewUser: "Новый пользователь успешно добавлен." +
                        "<br/><b>Пользователь:</b> Синан АЙДОГАН",
                    alertDeletedUserTitle: "предупреждение",
                    alertDeletedUser: "Пользователь успешно удален" +
                        "<br/><b>Пользователь:</b> Зухал ТАШИ"
                },
                zh: {
                    title: "欢迎来到海葵",
                    home: "家",
                    dashboard: "仪表板",
                    incomes: "收入",
                    dailyDoneCharts: "每日完成图表",
                    refunds: "退款",
                    stationeryCost: "退款",
                    userList: "用户列表",
                    activeProjects: "活动项目",
                    name: "名称",
                    startDate: "开始日期",
                    endDate: "结束日期",
                    status: "状态",
                    simpleSearch: "简单搜索",
                    name1: "Siyan Alekov Hristov",
                    name2: "Yuan Lei",
                    name3: "Liao Rong",
                    name4: "Zhu Chang",
                    alertDeleted: "用户删除成功，点我",
                    alertOverwrite: "所有更改都覆盖到自己",
                    alertSaved: "新项目保存成功",
                    alertNewUser: "新用户添加成功。." +
                        "<br/><b>用户:</b> Sinan AYDOĞAN",
                    alertDeletedUserTitle: "警告",
                    alertDeletedUser: "用户删除成功" +
                        "<br/><b>用户:</b> Zuhal TAŞÇI"
                },
            }
        });
        const breadcrumbs = reactive([
            {label: tm("home"), link: "/", active: false},
            {label: tm("dashboard"), link: "", active: true, activeColor: "blue"}
        ]);
        const tableHeader = reactive([
            {key: "id", label: "ID", align: "center"},
            {key: "name", label: "Name", align: "left", searchable: true, status: true},
            {key: "start", label: "Start Date", align: "left", status: true},
            {key: "end", label: "End Date", align: "left", status: true},
            {key: "status", label: "Status", align: "center", status: true}
        ])
        const tableContent = reactive([
            {id: 1, name: "VueJS Components", start: "01.03.2021", end: "14.09.2021", status: 10},
            {id: 2, name: "Custom Style Optimize", start: "02.05.2021", end: "25.08.2021", status: 20},
            {id: 3, name: "Error Management", start: "25.04.2021", end: "30.12.2021", status: 70}
        ])
        const tableFeatures = reactive({
            table: {
                design: 'elegant',
                rowBorder: true,
                zebraRow: true,
                radius: 3,
                perPage: 5
            },
            pagination: {
                status: true,
                radius: 3,
                range: 5,
                jump: true,
                nextText: "Sonraki",
                previousText: "Önceki",
                detailText: "Sayfa: $a - $b"
            },
            actions: {
                status: true,
                headerText: "Aksiyonlar"
            },
            deleteModal: {
                headerText: "Item's deleting",
                contentText: "You are going to delete <br><b></b><br>Are you sure ?",
                icon: "warning"
            }
        });
        return {tm, breadcrumbs, tableHeader, tableContent, tableFeatures};
    }
});
</script>
