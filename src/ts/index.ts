import $ from 'jquery'

$(() => {
    $('#request-demo-form').on('submit', (event) => {
        event.preventDefault()
        showSuccessMsg()
        setTimeout(clearMsgs, 3800)
        clearReqDemoForm()
    })
})

/**
 * Displays a success message to the user.
 * 
 * @returns {void}
 */
function showSuccessMsg(): void {
    // $('#msgs').text('Thank you. Your request has been sent.')
    $('#msgs').html(`
        <i class="fas fa-check-circle"></i>
        Thank you. Your request has been sent.
    `)
    $('#msgs').slideDown('slow')
}

/**
 * Clear text from msgs div and change its
 * display to none to hide it.
 * 
 * @returns {void}
 */
function clearMsgs(): void {
    $('#msgs').empty()
    $('#msgs').css('display', 'none')
}

/**
 * Clear the inputs on the demo request form.
 * 
 * @returns {void}
 */
function clearReqDemoForm(): void {
    $('#request-demo-form').trigger('reset')
}