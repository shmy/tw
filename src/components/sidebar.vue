<template>
    <nav class="sidebar">
        <ul class="menus">
            <li v-for="menu of menus" :key="menu.path" class="menu-item">
                <router-link tag="a" class="menu-item-link flex-row" :to="menu.path">
                    <i :class="['icon-' + menu.icon, 'menu-icon-size']"></i>
                    <span style="margin-left: 20px">{{ menu.name }}</span>
                </router-link>
            </li>
        </ul>
        <div class="history">
            <p class="history-title">History</p>
            <ul class="history-ul">
                <li class="history-item hover-hand" v-for="history of historys" :key="history">
                    {{history}}
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        data: () => ({
            menus: [
                {icon: 'dashboard', path: '/dashboard', name: 'DASHBOARD'},
                {icon: 'sitemap', path: '/agent', name: 'AGENT'},
                {icon: 'boat', path: '/cruise', name: 'MY CRUISE'},
                {icon: 'life-bouy', path: '/help', name: 'HELP'},
            ],
            historys: new Array(11).fill(0).map((item, index) => {
                index = index + 2;
                index < 10 && (index = '0' + index)
                let text = `bjstdmngbdr${index} Acceptance_test`
                if (index === '05') {
                    text += 'texttexttexttexttexttexttexttexttext'
                }
                return text
            })
        }),
    }
</script>
<style lang="scss">
    .sidebar {
        padding-top: 25px;
        box-sizing: border-box;
        height: 100%;
        width: 270px;
        background-color: #2d4054;
        position: relative;
    }

    .menus {
        margin: 0;
        padding: 0;
        list-style: none;

        .menu-item {
            height: 45px;
            line-height: 45px;
            color: #fff;
        }

        .menu-item-link {
            height: 100%;
            width: 100%;
            transition: .3s;
            padding-left: 32px;
            box-sizing: border-box;
            font-size: 14px;
            align-items: center;
            &.router-link-active,
            &:hover {
                background-color: #435466;
                color: #00b4cf;
            }
        }
        .menu-icon-size {
            font-size: 20px;
            transform: translateY(-3px);
        }

    }
    .history {
        position: absolute;
        bottom: 30px;
        left: 0;
        width: 100%;
        padding-right: 40px;
        box-sizing: border-box;
    }
    .history-ul {
        color: #999999;
        list-style: none;
        margin: 0;
        padding-left: 10px;
    }
    .history-title {
        font-size: 24px;
        color: #ccc;
        text-indent: 10px;
        margin: 15px 0;
    }
    .history-item {
        font-size: 12px;
        line-height: 26px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*width: 100%;*/
        &::before {
            content: '\2022';
            margin-right: 20px;
        }
        &:hover {
            color: #00b4cf;
        }
    }
</style>