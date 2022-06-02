enum ImageFormat {
	PNG = 'png',
	JPEG = 'jpeg',
}

interface IResolution {
	width: number;
	height: number;
}

interface IImageConversion extends IResolution {
	format: ImageFormat;
}

class ImageBuilder {
	private formats: ImageFormat[] = [];
	private resolutions: IResolution[] = [];

	addPng(): this {
		if (!this.formats.includes(ImageFormat.PNG))
			this.formats.push(ImageFormat.PNG);

		return this;
	}

	addJpeg(): this {
		if (!this.formats.includes(ImageFormat.JPEG))
			this.formats.push(ImageFormat.JPEG);

		return this;
	}

	addResolution(width: number, height: number): this {
		this.resolutions.push({ width, height });
		return this;
	}

	build(): IImageConversion[] {
		const res: IImageConversion[] = [];
		this.resolutions.forEach(r =>
			this.formats.forEach(f =>
				res.push({
					format: f,
					height: r.height,
					width: r.width,
				})
			)
		);

		return res;
	}
}

console.log(
	new ImageBuilder()
		.addJpeg()
		.addPng()
		.addResolution(100, 50)
		.addResolution(200, 200)
		.build()
);
