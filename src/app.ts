type AnimationName = 'fade' | 'unFade';
type AnimationFunction = 'in' | 'out' | 'inOut';

type AnimationT =
	`${Capitalize<AnimationName>}${Capitalize<AnimationFunction>}`;

type ErrorOrSuccess = 'error' | 'success';
interface IResponse {
	result: `http${Capitalize<ErrorOrSuccess>}`;
}

const a: IResponse = {
	result: 'httpError',
};

// infer
type Pull<T> = T extends `Fade${infer R}` ? R : never;
type AnimationFunction2 = Pull<AnimationT>;
