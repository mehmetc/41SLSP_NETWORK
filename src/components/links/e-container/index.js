import linksContainerHTML from './linksContainer.html'

export let linksContainerEComponent = {
  name: 'rzs-links-e-container',
  config: {
    template:linksContainerHTML
  },
  enabled: true,
  appendTo: 'prm-alma-viewit-items-after',
  enableInView: '.*',
}