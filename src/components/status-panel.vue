<template>
    <div class="status-panel">
        <div class="status-background flex-row flex-center" :style="{ backgroundColor }">
            <i :class="[statusIcon, 'icon-size', rotate && 'rotate']"></i>
        </div>
        <div class="status-front">
            <div class="status-text">{{ statusText }}</div>
            <div class="status-count">{{ statusCount }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            rotate: {
                type: Boolean,
                default: false,
            },
            backgroundColor: {
                type: String,
                default: ''
            },
            statusIcon: {
                type: String,
                default: ''
            },
            statusText: {
                type: String,
                default: ''
            },
            statusCount: {
                type: [Number, String],
                default: '-'
            }
        }
    }
</script>
<style lang="scss">
    .status-panel {
        height: 100%;
        width: 100%;
        position: relative;

        .status-background,
        .status-front {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }

        .status-front {
            padding: 10px 0 0 20px;
            box-sizing: border-box;
        }

        .status-background {
            /*background-color: #ff9a2a;*/
            overflow: hidden;

            .icon-size {
                font-size: 144px;
                opacity: .2;
                color: #fff;

                &.rotate {
                    animation: rotate 2s linear infinite;
                }
            }
        }

        .status-text {
            font-size: 16px;
            font-weight: bold;
            color: #fff;
        }

        .status-count {
            text-align: right;
            position: absolute;
            bottom: 10px;
            right: 20px;
            font-size: 48px;
            color: #fff;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>