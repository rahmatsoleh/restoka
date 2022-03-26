import '../../../styles/component/loading.scss';

class Loading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="loading d-none">
        <div></div>
      </section>
    `;
  }
}

customElements.define('loading-wait', Loading);
