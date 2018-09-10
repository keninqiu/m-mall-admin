import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor($scope, $state, $timeout, $ionicLoading, $weuiGallery, $ionicModal,AppService, ClassifyResource){
        super('classify', $scope, $state, $timeout, $ionicLoading, ClassifyResource)
        Object.assign(this, {
            $weuiGallery, 
            $ionicModal, 
            AppService, 
            ClassifyResource, 
        })        
        this.init()
    }

    init() {
        this.initForm()
    }

    initForm() {
        this.max  = 1
        this.form = {
            name  : null,
            remark: null,
            show_in_menu: null,
            images: [],
        }
    }

    submitForm(isValid) {
        if (!isValid) return
        console.log(this.form)
        this.classify.save(this.form, {
            callback: () => this.$state.go('web.classify.list')
        })
    }

    showGallery(id, index) {
        const vm = this
        vm.$weuiGallery.show({
            index: index,
            urls: vm.form.images.map(n => n.path),
            cancel: function() {
                console.log('cancel')
            },
            delete: function(index, item) {
                vm.delFile(id, index)
                return !0
            },
            animation: 'fade-in-right'
        })
    }

    getFile() {
        this.AppService.uploadFile({
            file: this.file
        }).then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                this.form.images.push(data.data)
            }
        })
    }

    delFile(id, index) {
        this.AppService.delFile(id)
        .then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                this.form.images.splice(index, 1)
            }
        })
    }    
}

Ctrl.$inject = [
    '$scope', 
    '$state', 
    '$timeout',
    '$ionicLoading',
    '$weuiGallery',
    '$ionicModal',    
    'AppService',
    'ClassifyResource',
] 

export default Ctrl