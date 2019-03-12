<template>
    <div>
        <div class="statistical flex-row">
            <div class="flex-w-auto">
                <div class="left statistical-item">
                    <status-panel :rotate="buildingCount > 0" background-color="#ff9a2a" status-icon="icon-cog"
                                  status-text="Building"
                                  :status-count="buildingCount"></status-panel>
                </div>
            </div>
            <div class="flex-w-auto">
                <div class="center statistical-item">
                    <status-panel background-color="#7fbc39" status-icon="icon-coffee" status-text="idle"
                                  :status-count="idleCount"></status-panel>
                </div>
            </div>
            <div class="flex-w-auto">
                <div class="right statistical-item flex-column">
                    <tag-count :all-count="allCount" :physical-count="physicalCount"
                               :virtual-count="virtualCount"></tag-count>
                </div>
            </div>
        </div>
        <div class="toolbar flex-row">
            <div class="hover-hand tab-item active">All</div>
            <div class="hover-hand tab-item">Physical</div>
            <div class="hover-hand tab-item">Virtual</div>
            <div class="flex-row flex-w-auto toolbar-right">
                <div class="flex-w-auto">
                    <div class="input-wrap flex-row flex-center">
                        <i class="icon-search"></i>
                        <input class="flex-w-auto search-input" type="text">
                    </div>
                </div>
                <div class="view-type">
                    <i class="hover-hand icon-th-card"></i>
                    <i class="hover-hand icon-th-list active"></i>
                </div>
            </div>

        </div>
        <ul class="agents">
            <agent-item :agent="agent" v-for="agent of agents" :key="agent.id"></agent-item>
        </ul>
    </div>
</template>
<script>
    import statusPanel from '@/components/status-panel'
    import tagCount from '@/components/tag-count'
    import agentItem from '@/components/agent-item'
    import http from '@/utils/http'

    export default {
        data: () => ({
            agents: [],
            buildingCount: '-',
            idleCount: '-',
            allCount: '-',
            physicalCount: '-',
            virtualCount: '-'
        }),
        components: {
            statusPanel,
            tagCount,
            agentItem,
        },
        created() {
            this.init();
        },
        methods: {
            findCount(collections, key, val) {
                return collections.filter((item) => {
                    return item[key] === val
                }).length
            },
            async init() {
                try {
                    this.agents = await http.get('/agents')
                    this.buildingCount = this.findCount(this.agents, 'status', 'building')
                    this.idleCount = this.findCount(this.agents, 'status', 'idle')
                    this.allCount = this.agents.length
                    this.physicalCount = this.findCount(this.agents, 'type', 'physical')
                    this.virtualCount = this.findCount(this.agents, 'type', 'virtual')
                } catch (e) {
                    alert(e.message)
                }
            }
        }
    }
</script>
<style lang="scss">
    .statistical {
        height: 116px;
        width: 100%;
        /*background-color: red;*/
        .statistical-item {
            height: 100%;
            width: 270px;
            /*background-color: red;*/
            &.left {
                float: left;
            }

            &.center {
                margin: 0 auto;
            }

            &.right {
                float: right;
            }
        }
    }

    .toolbar {
        height: 50px;
        line-height: 50px;
        background-color: #ffffff;
        margin-top: 18px;

        .tab-item {
            padding: 0 27px;
            box-sizing: border-box;
            border-right: 1px solid #eee;
            border-bottom: 3px solid transparent;
            color: #4A4A4A;

            &.active {
                color: #00b4cf;
                border-bottom-color: #00b4cf;
            }
        }

        .toolbar-right {
            display: flex;
            padding: 0 30px;
            align-items: center;
            box-sizing: border-box;
        }

        .input-wrap {
            height: 30px;
            line-height: 30px;
            width: 170px;
            /*margin-left: 30px;*/
            background-color: #f3f3f3;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, .3);
            padding: 5px;
            box-sizing: border-box;
            .icon-search {
                padding: 0 10px 0 5px;
                font-size: 20px;
                color: #9C9C9C;
            }

            .search-input {
                height: 100%;
                outline: none;
                border: none;
                background-color: #f3f3f3;
                box-sizing: border-box;
            }
        }

        .view-type {
            display: flex;
            align-items: center;
            color: #4a4a4a;

            > i {
                margin-left: 20px;
                font-size: 20px;

                &.active {
                    color: #00B4CF;
                }
            }
        }
    }

    .agents {
        margin: 0;
        padding: 0;
        list-style: none;
    }

</style>