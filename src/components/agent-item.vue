<template>
    <li class="agent-item flex-row flex-center">
        <img :src="oslogos[agent.os]" class="os-logo"/>
        <div class="flex-w-auto agent-item-detail flex-column">
            <div class="agent-info flex-h-auto flex-row">
                <i class="agent-info-icon icon-desktop"></i>
                <span class="agent-info-hostname">{{ agent.name }}</span>
                <span class="agent-info-badge-wrap">
                    <span class="agent-info-badge" :class="'bg-' + agent.status">{{ agent.status }}</span>
                </span>
                <i class="agent-info-icon icon-info"></i>
                <span class="agent-info-text">{{ agent.ip }}</span>
                <i class="agent-info-icon icon-folder"></i>
                <span class="agent-info-text">{{ agent.location }}</span>
            </div>
            <div class="agent-resources flex-h-auto flex-row">
                <button ref="button" @click="handleOpenPopup()" class="agent-button icon">
                    <i class="icon-plus"></i>
                </button>
                <div style="position: relative">
                    <resource-popup @done="handleAddResDone($event)" ref="resourcePopup"></resource-popup>
                </div>
                <div class="resource-wrap flex-w-auto flex-row">
                    <div v-for="(resource, index) of agent.resources" :key="resource + index" class="resource-item">
                        <span>{{ resource }}</span>
                        <i @click="handleDelete(index)" class="icon-trash delete-btn"></i>
                    </div>
                </div>
                <button disabled v-if="agent.status === 'building'" class="agent-button">
                    <i class="icon-deny"></i> &nbsp;
                    <span>Deny</span>
                </button>
            </div>
        </div>
    </li>
</template>
<script>
    import resourcePopup from '@/components/resource-popup'
    import http from '@/utils/http'
    const loadImg = name => require(`@/assets/os-icons/${name}.png`)
    export default {
        data: () => ({
           oslogos: {
               windows: loadImg('windows'),
               centos: loadImg('cent_os'),
               debian: loadImg('debin'),
               suse: loadImg('suse'),
               ubuntu: loadImg('ubuntu'),
           }
        }),
        props: {
          agent: {
              type: Object,
              default: () => ({})
          }
        },
        components: {
            resourcePopup,
        },
        methods: {
            handleOpenPopup() {
                this.$refs.resourcePopup.open()
            },
            async handleAddResDone(e) {
                try {
                    let resources = e.split(',')
                    resources.unshift.apply(resources, this.agent.resources)
                    await http.patch(`/agents/${this.agent.id}`, {
                        resources,
                    })
                    this.agent.resources = resources
                } catch (e) {
                    alert(e.message)
                }
            },
            async handleDelete(index) {
                try {
                    const resources = JSON.parse(JSON.stringify(this.agent.resources))
                    resources.splice(index, 1)
                    await http.patch(`/agents/${this.agent.id}`, {
                        resources,
                    })
                    this.agent.resources = resources
                } catch (e) {
                    alert(e.message)
                }

            }
        }
    }
</script>
<style lang="scss">
    .agent-item {
        margin-top: 18px;
        height: 110px;
        background-color: #ffffff;
        padding: 0 17px;
        box-sizing: border-box;

        .os-logo {
            height: 80px;
            width: 80px;

        }

        .agent-item-detail {
            height: 100%;
            margin-left: 30px;
            box-sizing: border-box;
            /*background-color: red;*/
        }

        .agent-info {
            align-items: center;

            .agent-info-icon {
                color: #9A9A9A;
                font-size: 16px;
                font-weight: bold;
                transform: translateY(-1px);
            }

            .agent-info-hostname {
                color: #00b4cf;
                font-weight: bold;
                margin-left: 10px;
            }

            .agent-info-text {
                color: #2D4054;
                margin-left: 10px;
                font-size: 14px;
            }

            .agent-info-badge-wrap {
                margin-left: 30px;
                width: 90px;
            }

            .agent-info-badge {
                padding: 0 10px;
                font-size: 14px;
                color: #ffffff;
            }

            .bg-idle {

                 background-color: #7fbc39;
             }
            .bg-building {

                background-color: #ff9a2a;
            }

            .icon-folder {
                margin-left: 20px;
            }
        }

        .agent-button {
            height: 30px;
            line-height: 30px;
            padding: 0 15px;
            background-color: #00b4cf;
            outline: none;
            border: none;
            cursor: pointer;
            color: #ffffff;
            transition: background-color .3s;
            &[disabled] {
                cursor: not-allowed;
            }
            &:hover,
            &:active {
                background-color: #01869a;
            }

            &.icon {
                padding: 0 10px;
                position: relative;
            }

            &.dark {
                background-color: #2d4051;

                &:hover,
                &:active {
                    background-color: #435466;
                }
            }

            .icon-plus {
                font-weight: bold;
                vertical-align: -1px;
            }

            .icon-deny {
                font-size: 14px;
                vertical-align: -1px;
            }
        }

        .resource-wrap {
            overflow-x: auto;
            overflow-y: hidden;
            height: 30px;
            margin: 0 10px;

            .resource-item {
                height: 30px;
                margin-right: 10px;
                line-height: 30px;
                padding: 0 10px;
                color: #2F4256;
                background-color: #efefef;
            }
            .delete-btn {
                font-size: 16px;
                font-weight: bold;
                margin-left: 10px;
                vertical-align: -3px;
                cursor: pointer;
                &:hover {
                    opacity: .6;
                }
            }
        }
    }
</style>