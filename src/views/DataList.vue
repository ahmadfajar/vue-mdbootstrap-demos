<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <div class="row">
      <div class="col-md-6">
        <bs-card class="mb-3" shadow>
          <bs-list-view>
            <bs-subheader>Today</bs-subheader>
            <template v-for="(item, index) in items">
              <bs-list-tile :key="item.title">
                <bs-list-tile-leading :img-src="item.avatar" size="48" circle />
                <bs-list-tile-content>
                  <bs-list-tile-title v-html="item.title" class="text-black" />
                  <bs-list-tile-subtitle v-html="item.subtitle" class="text-muted" />
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-divider v-if="index + 1 < items.length"
                          left-indent="80"
                          :key="item.title + index" />
            </template>
          </bs-list-view>
          <bs-card-body>
            <bs-card-content type="title">
              Just Another Title
            </bs-card-content>
            <bs-card-content>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-md-6">
        <bs-card shadow>
          <bs-list-view color="unique-color-dark">
            <bs-subheader>
              Recent Chat
              <bs-menu class="ml-auto"
                       color="default-color-dark"
                       placement="bottom-right">
                <bs-button color="secondary"
                           class="ml-auto"
                           mode="icon"
                           flat>
                  <bs-icon icon="MoreVert" size="24" />
                </bs-button>
                <bs-list-view color="default-color-dark" slot="content">
                  <bs-list-tile>
                    <bs-list-tile-title>Refresh</bs-list-tile-title>
                  </bs-list-tile>
                  <bs-list-tile>
                    <bs-list-tile-title>Send feedback</bs-list-tile-title>
                  </bs-list-tile>
                  <bs-list-tile>
                    <bs-list-tile-title>Settings</bs-list-tile-title>
                  </bs-list-tile>
                  <bs-list-tile>
                    <bs-list-tile-title>Help</bs-list-tile-title>
                  </bs-list-tile>
                </bs-list-view>
              </bs-menu>
            </bs-subheader>
            <template v-for="(item, index) in chats1">
              <bs-list-tile :key="item.title">
                <bs-list-tile-leading :img-src="item.avatar" circle />
                <bs-list-tile-content>
                  <bs-list-tile-title v-html="item.title" />
                </bs-list-tile-content>
                <bs-list-tile-action>
                  <font-awesome-icon icon="comment-alt"
                                     size="lg"
                                     :class="{'text-teal':item.active, 'text-grey-500': !item.active}" />
                </bs-list-tile-action>
              </bs-list-tile>
              <bs-divider v-if="index + 1 < chats1.length"
                          left-indent="80"
                          :key="item.title + index" />
            </template>
          </bs-list-view>
          <bs-list-view color="unique-color-dark">
            <bs-subheader>Previous Chat</bs-subheader>
            <template v-for="(item, index) in chats2">
              <bs-list-tile :key="item.title">
                <bs-list-tile-leading :img-src="item.avatar" circle />
                <bs-list-tile-content>
                  <bs-list-tile-title v-html="item.title" />
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-divider v-if="index + 1 < chats2.length" :key="item.title + index" />
            </template>
          </bs-list-view>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "DataList",
    data: () => ({
        avatar: 'assets/2.jpg',
        enableMessage: false,
        enableHints: true,
        popover: false,
        goHome: '#/home',
        items: [
            {
                avatar: 'assets/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: "Ali Connors &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
                avatar: 'assets/2.jpg',
                title: 'Summer BBQ <small>4</small>',
                subtitle: "to Alex, Scott, Jennifer &mdash; Wish I could come, but I'm out of town this weekend."
            },
            {
                avatar: 'assets/3.jpg',
                title: 'Oui oui',
                subtitle: "Sandra Adams &mdash; Do you have Paris recommendations? Have you ever been?"
            },
            {
                avatar: 'assets/4.jpg',
                title: 'Birthday gift',
                subtitle: "Trevor Hansen &mdash; Have any ideas about what we should get Heidi for her birthday?"
            }
        ],
        chats1: [
            {active: true, title: 'Jason Oner', avatar: 'assets/1.jpg'},
            {active: true, title: 'Ranee Carlson', avatar: 'assets/2.jpg'},
            {title: 'Cindy Baker', avatar: 'assets/3.jpg'},
            {title: 'Ali Connors', avatar: 'assets/4.jpg'}
        ],
        chats2: [
            {title: 'Travis Howard', avatar: 'assets/5.jpg'}
        ],
    }),
}
</script>

<style scoped>

</style>
