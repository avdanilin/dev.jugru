document.addEventListener('DOMContentLoaded', function () {
    const closedModal = document.querySelectorAll('.go-back')
    const backdropModal = document.querySelector('.modal-backdrop')
    const modals = document.querySelectorAll('[data-modal]')

    modals.forEach(modal => {
        modal.addEventListener('click', toggleModal)
    })


    function toggleModal() {
        const idModal = this.getAttribute('data-modal')

        backdropModal.style.opacity = 1
        backdropModal.style.zIndex = 99
        document.body.style.overflowY = 'auto'
        document.body.appendChild(backdropModal)

        openModal(idModal)

        backdropModal.addEventListener('click', hideModal)

        closedModal.forEach(closeItem => {
            closeItem.addEventListener('click', hideModal)
        })

        function hideModal() {
            setTimeout(() => {
                backdropModal.style.opacity = 0
                backdropModal.style.zIndex = '-99'
                document.body.style.overflow = ''
            }, 400)

            closeModal(idModal);
        }

    }

    function openModal(id) {
        const modal = document.querySelector(`#${id}`)

        modal.style.display = 'flex'
        modal.style.flexDirection = 'column'
        modal.style.justifyContent = 'space-between'
        modal.style.position = 'absolute'
        modal.style.top = '50%'
        modal.style.left = '50%'
        modal.style.opacity = 1
        modal.style.transform = 'translate(-50%, -50%)'

        modal.addEventListener('submit', (e) => {
            e.preventDefault()

            modal.querySelector('.modal-body').innerHTML = ''

            let successText = ''

            if (id === 'to-the-ass') {
                modal.querySelector('.modal-header').remove()
                modal.querySelector('form').style.justifyContent = 'center'
                successText = 'Спасибо, что поделились!'

            } else {
                modal.querySelector('.modal-header').style.marginBottom = 50 + 'px'
                successText = 'Спасибо, что подписались на нашу рассылку!'
            }

            const success = `<p class="success">${successText}</p>`

            modal.querySelector('.modal-body').innerHTML = ''
            modal.querySelector('.modal-body').innerHTML = success

            setTimeout(() => {
                backdropModal.style.opacity = 0
                modal.style.display = 'none'
            }, 3000)
        })

    }

    function closeModal(id) {
        const modal = document.querySelector(`#${id}`)

        modal.style.opacity = 0

        setTimeout(() => {
            modal.style.display = 'none'
        }, 400)
    }

})