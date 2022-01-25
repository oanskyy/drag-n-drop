// Code goes here!

class Projectnput {
	templateEl: HTMLTemplateElement
	hostEl: HTMLDivElement

	constructor() {
		this.templateEl = document.getElementById(
			"project-input"
		)! as HTMLTemplateElement
		this.hostEl = document.getElementById("app")! as HTMLDivElement
	}
}
