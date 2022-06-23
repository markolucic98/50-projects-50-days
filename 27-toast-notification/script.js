const button = document.getElementById('btn')
const toasts = document.getElementById('toasts')

button.addEventListener('click', () => createNotification())

function createNotification() {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.innerText = 'Notification '
  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}
