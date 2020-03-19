const SlackBot = require('slackbots')
const dotenv = require('dotenv')
const axios = require('axios')

module.exports = (req, res) => {
  dotenv.config()

  const bot = new SlackBot({
    token: `${process.env.bot_token}`,
    name: 'GoshaBot',
  })

  bot.on('start', () => {
    const params = {
      icon_emoji: ':brain:',
    }

    bot.postMessageToUser(
      'gaupanisset',
      `Try to connect... zzzZZZzz with ${randomChoice() ||
        'Bop-pilib-bip'} and ${randomChoice() || 'Bop-pilib-bip'}`
    )
  })

  /**
   * Return a random name in the goshabiens list and remove it.
   */
  const randomChoice = () => {
    try {
      return goshabiens.splice(Math.floor(Math.random() * goshabiens.length))[0]
    } catch (err) {
      console.log(err)
      return 'Bip-bilip-bop'
    }
  }

  const goshabiens = [
    'Minh',
    'Djamil',
    'Camille',
    'Gauthier',
    'Nadège',
    'Margaux',
    'Imen',
    'Abderrazag',
    'Gaelle',
    'Thomas',
    'Laetitia',
    'Baptiste',
    'Matthieu',
    'Linda',
    'Sylvie',
    'Amandine',
    'Emilie',
    'Julie',
    'Oussama',
    'Nidhal',
    'Anna',
    'Alex',
    'Bastien',
    'Olivier',
  ]

  setInterval(() => {
    const now = new Date()
    // Every day between 10:00 and 10:05
    if (now.getHours() === 10 && now.getMinutes() < 5) {
      // const user1 = randomChoice() || 'Bop-pilib-bip'
      // const user2 = randomChoice() || 'Bop-pilib-bip'

      const params = {
        icon_emoji: ':filmer:',
      }
      bot.postMessageToChannel(
        'boite_de_nuit_qvt',
        //       `
        // :filmer: « La Minute Goshaba » :filmer:
        // Aujourd’hui ${user1} et ${user2} réaliseront une vidéo sur le sujet de leur choix.
        // Pour cela, vous pouvez utiliser votre smartphone, votre mac (App: Photo Booth) ou votre PC (App: AZ recorder).
        // Merci de poster votre vidéo à 16h pétante sur le channel boitedenuitqvt
        // Bonne journée les Goshabiens !
        // `,`
        `:filmer: « La Minute Goshaba » :filmer:
Aujourd’hui Benjamin réalisera une vidéo sur le sujet de son choix.
Pour cela, tu peux utiliser ton smartphone, ton mac (App: Photo Booth) ou ton PC (App: AZ recorder).
Merci de poster ta vidéo à 16h pétante sur le channel boitedenuitqvt
Bonne journée les Goshabiens !
`,
        params
      )
    }
  }, 5 * 60 * 1000)
}
