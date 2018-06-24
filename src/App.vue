<template>
    <div class="page-container md-layout-row">
        <md-app>
            <md-app-toolbar id="toolbar" class="md-primary">
                <div class="color-strip md-elevation-5">
                    <table cellspacing=0px cellpadding=0px >
                        <tr>
                        <td style="background-color:#00a651"></td>
                        <td style="background-color:#ed1c24"></td>
                        <td style="background-color:#f57e25"></td>
                        <td style="background-color:#009cd7"></td>
                        </tr>
                    </table>
                </div>

                <md-button class="md-icon-button" @click="showSidebar=true">
                    <md-icon>menu</md-icon>
                </md-button>

                <router-link class="md-tittle" to="/">FTC Iowa Scores</router-link>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="showSidebar">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <md-button class="md-icon-button" @click="showSidebar=false">
                        <md-icon>keyboard_arrow_left</md-icon>
                    </md-button>
                    <span class="md-title">Navigation</span>
                </md-toolbar>

                <md-list>
                    <router-link tag="md-list-item" to="/league">
                        <md-icon>home</md-icon>
                        <span class="md-list-item-text">League</span>
                    </router-link>

                </md-list>

            </md-app-drawer>

            <md-app-content id="content-pane">
                <router-view id="main-view" />
            </md-app-content>


        </md-app>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {
    },
    data: () => ({
        showSidebar: false
    })
}
</script>

<style lang="scss" scoped>
.page-container {
  background-image: linear-gradient(to right, rgb(0, 57,116), rgb(108, 194, 201), rgb(0, 57, 116));
}

.md-app {
    min-height: 100vh;
    max-width: 1000px;
    margin: auto;
}

.md-app-toolbar {
    padding-left: 0;
    padding-right: 0;
    padding-top: 10px;
}

.color-strip {
    width: 100%;
    height: 10px;
    position: absolute;
    top: 0px;
    table {
        width: 100%;
        height: 10px;
    }
    td {
        width: 25%;
        height: 10px;
        padding: 0;
        border-width: 0;
    }
}
</style>
