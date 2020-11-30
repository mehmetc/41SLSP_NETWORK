import linksContainerHTML from './linksContainer.html'

export let linksContainerPComponent = {
  name: 'rzs-links-p-container',
  config: {
    template:linksContainerHTML
  },
  enabled: true,
  appendTo: 'prm-opac-after',
  enableInView: '.*',
}