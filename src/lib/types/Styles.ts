export type Size = {
	xs: string;
	sm: string;
	rg: string;
	lg: string;
	xl: string;
	xxl: string;
};

export type Color = {
	"000": string;
	"010": string;
	"020": string;
	"030": string;
	"040": string;
	"050": string;
	"060": string;

	"100": string;
	"110": string;

	"200": string;
	"210": string;
};

export const colorOptions: Color = {
	"000": "#000",
	"010": "#101010",
	"020": "#0a0a0a",

	"030": "#161616",
	"040": "#292929",
	"050": "#3c3c3c",
	"060": "#a5a5a5",

	"100": "#DF0100",
	"110": "#3d000e",

	"200": "#989ba4",
	"210": "#ccc"
};

export const textSizeOptions: Size = {
	xs: "var(--f-xs)",
	sm: "var(--f-sm)",
	rg: "var(--f-rg)",
	lg: "var(--f-lg)",
	xl: "var(--f-xl)",
	xxl: "var(--f-xxl)"
};
