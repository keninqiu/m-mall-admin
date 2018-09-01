import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor($scope, $state, $timeout, $ionicLoading, ClassifyResource){
        super('classify', $scope, $state, $timeout, $ionicLoading, ClassifyResource)
        this.init()
    }

    init() {
        this.initForm()
        this.renderHtml()
    }

    renderHtml() {
        this.classify.detailAsync({id: this.$state.params.id})
        .then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                const detail = data.data
                this.form = {
                    id    : detail._id,
                    name  : detail.name,
                    remark: detail.remark,
                    show_in_menu: detail.show_in_menu,
                }
            }
        })
    }

    initForm() {
        this.form = {
            name  : null,
            remark: null,
            show_in_menu: null,
        }
    }

    submitForm(isValid) {
        if (!isValid) return
        console.log(this.form)
        this.classify.update(this.form, {
            callback: () => this.$state.go('web.classify.list')
        })
    }
}

Ctrl.$inject = [
    '$scope', 
    '$state', 
    '$timeout',
    '$ionicLoading',
    'ClassifyResource',
] 

export default Ctrl