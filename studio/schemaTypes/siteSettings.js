export default {
  name: 'siteSettings',
  title: 'Definicoes do Site',
  type: 'document',
  fields: [
    { name: 'heroTitle', title: 'Titulo Principal', type: 'string' },
    { name: 'heroSubtitle', title: 'Subtitulo', type: 'text' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'instagram', title: 'Instagram', type: 'url' },
  ],
}