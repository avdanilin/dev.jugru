document.addEventListener('DOMContentLoaded', function () {

    const modals = document.querySelectorAll('[data-modal]')

    modals.forEach(modal => {
        modal.addEventListener('click', toggleModal)
    })

    function toggleModal() {
        const idModal = this.getAttribute('data-modal')
        const backdropModal = document.createElement('div')

        backdropModal.classList.add('modal-backdrop')
        backdropModal.style.opacity = 1
        document.body.style.overflow = 'hidden'
        document.body.appendChild(backdropModal)

        openModal(idModal)

        // backdropModal.addEventListener('click', function () {
        //     backdropModal.style.opacity = 0
        //     document.body.style.overflow = ''
        //
        //     setTimeout(() => {
        //         backdropModal.remove()
        //     }, 400)
        // })
        //
        // closeModal(idModal);
    }

    function openModal(id) {
        const modal = document.querySelector(`#${id}`)

        modal.style.display = 'flex'
        modal.style.flexDirection = 'column'
        modal.style.justifyContent = 'space-between'
        modal.style.position = 'absolute'
        modal.style.top = '50%'
        modal.style.left = '50%'
        modal.style.transform = 'translate(-50%, -50%)'
    }

    function closeModal(id) {
        const modal = document.querySelector(`#${id}`)

        modal.style.opacity = 0

        setTimeout(() => {
            modal.style.display = 'none'
        }, 400)

    }

})