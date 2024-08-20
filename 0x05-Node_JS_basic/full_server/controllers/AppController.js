/**
 * Contains the miscellaneous route handlers.
 * @author Mmadubugwu Kingsley <https://github.com/Kmmadu>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
