<template>
    <div class="tag-count flex-column">
        <div class="tag-titles flex-row">
            <div class="flex-w-auto">ALL</div>
            <div class="flex-w-auto">PHYSICAL</div>
            <div class="flex-w-auto">VIRTUAL</div>
        </div>
        <div class="tag-counts flex-row flex-h-auto">
            <div class="flex-w-auto flex-row flex-center">{{ allCount }}</div>
            <div class="flex-w-auto flex-row flex-center">{{ physicalCount }}</div>
            <div class="flex-w-auto flex-row flex-center">{{ virtualCount }}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            allCount: {
                type: [Number, String],
                default: '-'
            },
            physicalCount: {
                type: [Number, String],
                default: '-'
            },
            virtualCount: {
                type: [Number, String],
                default: '-'
            }
        }
    }
</script>
<style lang="scss">
    .tag-count {
        height: 100%;
        width: 100%;
        background-color: #ffffff;
        text-align: center;
        .tag-titles {
            height: 60px;
            line-height: 60px;
            font-size: 12px;
        }
        .tag-counts {
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>