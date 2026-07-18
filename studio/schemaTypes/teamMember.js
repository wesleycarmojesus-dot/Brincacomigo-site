export default {
  name: 'teamMember',
  title: 'Membro da Equipa',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nome', type: 'string' },
    { name: 'location', title: 'Localizacao', type: 'string' },
    { name: 'description', title: 'Descricao', type: 'text' },
    { name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } },
  ],
}
