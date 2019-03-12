<template>
    <div v-if="hasShow" v-clickoutside="close" class="resource-popup">
        <div>
            <i @click="close" class="popup-icon icon-close"></i>
        </div>
        <p>Separate multiple resource name with commas</p>
        <input @keyup.enter="handleSubmit()" class="resource-input" ref="input" v-model="resources" type="text">
        <div style="margin-top: 20px">
            <button @click="handleSubmit()" class="agent-button popup-btn">Add Resources</button>
            <button @click="close()" style="margin-left: 20px" class="agent-button dark popup-btn">Cancel</button>
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            resources: '',
            hasShow: false,
        }),
        methods: {
            close() {
                this.hasShow = false
            },
            open(resources = '') {
                this.resources = resources
                this.hasShow = true
                this.$nextTick(() => {
                    this.$refs.input.focus()
                })
            },
            handleSubmit() {
                this.$emit('done', this.resources)
                this.close()
            }
        }
    }
</script>
<style lang="scss">
    .resource-popup {
        height: 165px;
        width: 570px;
        border: 1px solid #0af;
        background-color: #fff;
        color: #5E5E5E;
        position: absolute;
        top: 50px;
        left: -45px;
        z-index: 11;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
        padding: 10px 20px;
        box-sizing: border-box;

        &::before {
            width: 0;
            height: 0;
            position: absolute;
            top: -23px;;
            left: 21px;
            padding: 0;
            border: 8px solid transparent;
            border-bottom: 15px solid #ffffff;
            display: block;
            content: '';
            z-index: 12;
        }

        &::after {
            width: 0;
            height: 0;
            position: absolute;
            top: -25px;;
            left: 20px;
            padding: 0;
            border: 9px solid transparent;
            border-bottom: 15px solid #0af;
            display: block;
            content: '';
            z-index: 10;

        }

        .resource-input {
            height: 35px;
            width: 100%;
            line-height: 35px;
            outline: none;
            border: none;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, .7);
            border-radius: 3px;
            padding: 0 10px;
            box-sizing: border-box;
            color: #00b4cf;
            font-size: 14px;
        }

        .popup-btn {
            font-size: 14px;
            padding: 0 25px !important;
        }

        .popup-icon {
            font-size: 20px;
            cursor: pointer;
            color: #00b4cf;
            float: right;

            &:hover {
                color: #01869a;
            }
        }

    }
</style>