
export default (linksSei) => {
	const filtered = linksSei.filter(link => link.ID_etapa === 200 && /sei\.prefeitura\.sp\.gov\.br+\/sei+\/modulos+\/pesquisa+\//i.test(link.arquivo))

	return filtered
		.map(link => link.PIU)
		.filter((value, index, self) => self.indexOf(value) === index)
		.map((nome, index) => {
			return {
				nome,
				id: index + 1,
				sei: (() => {
					return filtered
						.filter(link => link.PIU === nome)
						.map(link => link.arquivo)
				})()
			}
		})
}
