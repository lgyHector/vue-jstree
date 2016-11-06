/**
 *
 */
Vue.component('tree-view', {
    props: {
        model: Array
    },
    template: '#tree-template',
    data: function(){
        return {
            checkedMap: {}
        }
    },
    methods: {
        expand: function(item, e){
            item.expand = !item.expand;
        },
        checked: function(item, e){
            item.checked = !item.checked;
            item.checked ? this.checkedMap[item.id] = item
                : delete this.checkedMap[item.id];
            //console.log(this.checkedMap)
            if(item.children){
                item.children.forEach(function(child){
                    this.checked(child)
                }.bind(this))
            }
        }
    },
    ready: function(){
        window.TreeView = this;
    }
})