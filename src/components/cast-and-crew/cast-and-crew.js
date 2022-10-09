export default class CastAndCrew extends HTMLElement {
  constructor() {
    super();
    this.profiles = [{
      name: 'Dave Flamand',
      title: 'Host',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }, {
      name: 'Owen Buckley',
      title: 'Producer',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }, {
      name: 'Erika Flamand',
      title: 'Designer',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }, {
      name: 'Tunesy',
      title: 'Mascot',
      avatar: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=' // eslint-disable-line max-len
    }];
  }

  connectedCallback() {
    const { profiles } = this;

    this.innerHTML = `
<<<<<<< HEAD
      <div class="profiles">
        </hr>
        <h2 
          class="text-3xl text-center font-extrabold"
          style="margin:0 auto 25px;width: 20%;font-family:var(--font-secondary); border-top: 2px solid rgba(107, 114, 128); border-bottom: 2px solid rgba(107, 114, 128);"
        >
          The Crew
        </h2>
        </hr>
=======
      <div>
<<<<<<< HEAD
        </br>
        <h2 class="text-lg text-center">Cast and Crew</h2>
        </br>
>>>>>>> 03dd8f9 (initial version of cast and crew section)
=======
        </hr>
        <h2 
          class="text-3xl text-center font-extrabold"
          style="margin:0 auto 25px;width: 20%;font-family:var(--font-secondary); border-top: 2px solid rgba(107, 114, 128); border-bottom: 2px solid rgba(107, 114, 128);"
        >
          The Crew
        </h2>
        </hr>
>>>>>>> 6bd62ce (basic styling and theming of the header)

        <div class="grid md:grid-cols-4 grid-cols-2">
          ${
            profiles.map((person) => {
              const { avatar, name, title } = person;

              return `
<<<<<<< HEAD
                <div class="text-center">
                  <img
                    class="block w-20 rounded-full text-center"
=======
                <div class="text-center"">
                  <img
<<<<<<< HEAD
                    class="block w-10 rounded-full text-center"
>>>>>>> 03dd8f9 (initial version of cast and crew section)
=======
                    class="block w-20 rounded-full text-center"
>>>>>>> 6bd62ce (basic styling and theming of the header)
                    style="margin:0 auto"
                    src="${avatar}"
                    alt="Photo of ${name} (${title})"
                  />
                  <h3 class="font-bold text-center">
                    ${name}
                  </h3>
<<<<<<< HEAD
<<<<<<< HEAD
                  <h4 class="uppercase text-center text-gray-500">
=======
                  <h4 class="text-center text-gray-500">
>>>>>>> 03dd8f9 (initial version of cast and crew section)
=======
                  <h4 class="uppercase text-center text-gray-500">
>>>>>>> 6bd62ce (basic styling and theming of the header)
                    ${title}
                  </h3>
                </div>
              `;
            }).join('')
          }
        </div>
      </div>
    `;
  }
}

customElements.define('tt-cast-crew', CastAndCrew);