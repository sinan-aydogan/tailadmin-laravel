export default {
    auth: {
        email: "Eposta",
        password: "Şifre",
        rememberMe: "Beni Hatırla",
        forgotPassword: "Şifreni unuttun mu?",
        login: "Giriş",
        logout: "Çıkış",
        register: "Kayıt",
        validationMessage: {
            email: {
                required: "Email adresi gereklidir",
                email: "Email adresi geçerli değil"
            },
            password: {
                required: "Şifre gereklidir"
            }
        }
    },
    general: {
        brandName: "LaraQuality",
        /* Theme */
        darkMode: "Aydınlık Tema",
        lightMode: "Karanlık Tema",
        auto: "Otomatik",
        /* Error */
        somethingWentWrong: "Üzügünüz! Birşeyler yanlış gitti",
        /* Simple Terms */
        save: "Kaydet",
        reset: "Sıfırla",
        cancel: "İptal Et",
        delete: "Sil",
        edit: "Düzenle",
        view: "Görüntüle"
    },
    mainMenu: {
        authPages: "Kullanıcı Sayfaları",
        authLogin: "Giriş",
        authRegister: "Kayıt",
        authForgotPassword: "Şifremi Unuttum",
        authLockScreen: "Kilit Ekranı",
        authProfile: "Profil",
        components: "Komponentler",
        componentAlert: "Alert",
        componentAvatar: "Avatar",
        componentBadge: "Rozet",
        componentBreadcrumb: "Breadcrumb",
        componentButton: "Düğme",
        componentCollapsible: "Açılır Liste",
        componentContentBox: "İçerik Kutusu",
        componentDropdown: "Açılır Menü",
        componentList: "Liste",
        componentLoading: "Yükleniyor Ekranı",
        componentModal: "Açılır Pencere",
        componentPagination: "Sayfalandırma",
        componentProgressBar: "İlerleme Göstergesi",
        componentStatisticWidget: "İstatistik Kutusu",
        componentTab: "Sekme",
        componentTable: "Tablo",
        componentTableJson: "Tablo(JSON)",
        componentTableBackend: "Tablo(BackEnd)",
        componentTooltip: "Bilgi Baloncuğu",
        layoutElements: "Yerleşim Bileşenleri",
        layoutStructure: "Yerleşim Yapısı",
        layoutGrid: "Izgara",
        formElements: "Form Bileşenleri",
        formStructure: "Form Yapısı",
        formInputGroup: "Input Grup",
        formSimpleInputs: "Klasik Inputlar",
        formRepeatableInput: "Tekrarlanabilir Input",
        formDateTimeInput: "Tarih/Zaman Input",
        formSelectInput: "Select Input",
        externalSources: "Dış Kaynaklar",
        externalGitHubRepo: "Github Repo",
        externalTailwindcssDocument: "TailwindCSS Dökümanı",
        externalVuejsDocument: "Vuejs Dökümanı",
        externalInertiaDocument: "Inertiajs Dökümanı",
        externalLaravelDocument: "Laravel Dökümanı",
        footerHelp: "Yardım",
        footerSettings: "Ayarlar"
    },
    userMenu: {
        manageAccount: "Hesap Yönetimi",
        manageTeam: "Takım Yönetimi",
        switchTeams: "Takım Değiştir",
        language: "Dil",
        darkMode: "Koyu Mod",
        profile: "Profil",
        api: "API Anahtarları",
        teamSettings: "Takım Ayarları",
        createNewTeam: "Yeni Takım Oluştur",
        auto: "Otomatik",
        dark: "Koyu",
        light: "Açık",
        logout: "Çıkış"
    },
    notification: {
        pendingWorks: "Bekleyen İşler",
        unfinishedTodos: "Devam Eden Yapılacaklar",
        unreadMessages: "Okunmamış Mesajlar"
    },
    component: {
        table: {
            searchPlaceHolder: "Ara",
            optionsModalTitle: "Tablo Özellikleri",
            optionsModalColumnOrder: "Sütunları Sırala veya Gizle",
            anyContentMessage: "Aradığınız kriterde içerik bulunamadı",
            advancedSearch: "Detaylı Arama",
            itemsCountPerPage: "Sayfadaki eleman sayısı",
            actionView: "İncele",
            actionEdit: "Düzenle",
            actionDelete: "Sil",
            missing: "Eksik",
            contentKeyError: "Content Key eksik, lütfen content key değerini belirleyiniz. Bu değer ilgili kontrollerinizden gelir. Örnek: '<b><i>users</i></b>'=>Users::all()",
            searchRouteError: "Search route eksik, lütfen search route değerini belirleyiniz. Arama sorgularınızın gönderileceği yoldur(route), genellikle tablonuzun bulunduğu sayfa ile aynı routedir. Örnek: <b><i>user.index</i></b>.",
            contentError: "Content veri seti eksik, lütfen bir içerik seti(content) ekleyiniz. Bu değer ilgili kontrollerinizden gelir. Örnek: '<b><i>users</i></b>'=>Users::all()",
            headerError: "Header veri seti eksik, lütfen header veri setini ekleyiniz. Tablonuzdaki sütünlarda hangi alanları göstereceğiniz belirlediğiniz ayar öğesidir."
        },
        pagination: {
            detailText: "Toplam: {totalPage} sayfa {totalRecord} kayıt",
            previous: "Önceki",
            next: "Sonraki"
        }
    }
};
