<template>
    <main id="app" class="flex-column">
        <header class="header">
            <div class="header-container flex-center container">
                <img class="logo" src="@/assets/logo/logo.svg" alt="">
                <div v-clickoutside="handleClickOutSide"
                     class="profile flex-center">
                    <div class="hover-hand flex-row flex-center" @click="profilePopupIsShow = !profilePopupIsShow">
                        <img src="@/assets/avatar/avatar.svg" alt=""
                             class="avatar">
                        <i @click="profilePopupIsShow = !profilePopupIsShow" :class="profilePopupIsShow && 'opened'"
                           class="profile-icon icon-angle-down"></i>
                    </div>
                    <ul v-show="profilePopupIsShow" class="profile-popup">
                        <li class="hover-hand profile-popup-item">
                            <i class="profile-popup-item-icon icon-id-card"></i>
                            <span class="profile-popup-item-text">Profile</span>
                        </li>
                        <li class="hover-hand profile-popup-item">
                            <i class="profile-popup-item-icon icon-sign-in"></i>
                            <span class="profile-popup-item-text">Sign Out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="flex-h-auto">
            <div class="flex-row container">
                <sidebar></sidebar>
                <router-view class="router-view flex-w-auto"></router-view>
            </div>
        </div>
        <footer class="footer">
            &copy;&nbsp;Copyright&nbsp;2017&nbsp;<strong>Thought</strong>Works
        </footer>
    </main>
</template>

<script>
    import Sidebar from '@/components/sidebar'

    export default {
        data: () => ({
            profilePopupIsShow: false,
        }),
        components: {
            Sidebar,
        },
        methods: {
            handleClickOutSide() {
                this.profilePopupIsShow = false;
            }
        }
    }
</script>

<style lang="scss">

</style>
