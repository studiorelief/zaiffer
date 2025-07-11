/* replace p by svg code for Component icons */
export function svgComponent() {
  document.querySelectorAll('[svg="component"]').forEach((element) => {
    const svgCode = element.textContent;
    if (svgCode !== null) {
      element.innerHTML = svgCode;
    }
  });
}

export function hideEmpty(): void {
  const emptyElements = document.querySelectorAll('.w-dyn-empty');

  emptyElements.forEach((element) => {
    const parentToHide = element.closest('[hide="if-empty"]');

    if (parentToHide) {
      (parentToHide as HTMLElement).style.display = 'none';
    }
  });
}

export function copyUrlToClipboard(): void {
  const copyElements = document.querySelectorAll('[fs-socialshare-element="copy-url"]');

  copyElements.forEach((element) => {
    element.addEventListener('click', async () => {
      try {
        // Copier l'URL actuelle
        await navigator.clipboard.writeText(window.location.href);

        // Créer et afficher le message de confirmation
        const message = document.createElement('url-copied');
        message.textContent = 'URL copied';
        message.style.cssText = `
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          background-color: var(--_brand---background--brand-yellow);
          color: var(--_brand---text--primary);
          padding: var(--_responsive---margin--padding--spacer--gap--medium) var(--_responsive---margin--padding--spacer--gap--large);;
          border-radius: var(--radius--small);
          font-size: var(--_responsive---font-size--text-small);
          z-index: 1000;
          transition: opacity 0.3s ease;
          font-weight: 500;
        `;

        document.body.appendChild(message);

        // Retirer le message après 2 secondes
        setTimeout(() => {
          message.style.opacity = '0';
          setTimeout(() => {
            if (message.parentNode) {
              message.parentNode.removeChild(message);
            }
          }, 300);
        }, 2000);
      } catch (err) {
        console.error("Erreur lors de la copie de l'URL:", err);
      }
    });
  });
}
