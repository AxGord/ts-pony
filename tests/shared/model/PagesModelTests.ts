import PagesModel from '../../../src/model/PagesModel';
import TestBase from '../../../src/testengine/TestBase';

export default class PagesModelTests extends TestBase {

	public model: PagesModel<number> = new PagesModel<number>();

	public before(): void {
		this.model.destroy();
		this.model = new PagesModel<number>();
		this.on1(this.model.signalLog, this.log);
		this.on1(this.model.signalError, this.error);
	}

	public testOpen(): void {
		let openCounter: number = 0;
		let finishOpenCounter: number = 0;
		this.model.signalOpenPage.add(() => openCounter++);
		this.model.signalFinishOpenPage.add(() => finishOpenCounter++);
		this.model.open(1);
		this.equals(openCounter, 1);
		this.equals(finishOpenCounter, 0);
		this.model.finishOpen();
		this.equals(openCounter, 1);
		this.equals(finishOpenCounter, 1);
		this.model.open(2);
		this.model.finishClose();
		this.model.open(4);
		this.equals(openCounter, 2);
		this.equals(finishOpenCounter, 1);
		this.model.finishOpen();
		this.model.finishOpen();
		this.equals(openCounter, 2);
		this.equals(finishOpenCounter, 2);
	}

	public testClose(): void {
		let closeCounter: number = 0;
		let finishCloseCounter: number = 0;
		this.model.signalClosePage.add(() => closeCounter++);
		this.model.signalFinishClosePage.add(() => finishCloseCounter++);
		this.model.close();
		this.model.finishClose();
		this.equals(closeCounter, 0);
		this.equals(finishCloseCounter, 0);
		this.model.open(3);
		// this.model.finishOpen();
		this.model.close();
		this.model.finishClose();
		this.equals(closeCounter, 0);
		this.equals(finishCloseCounter, 0);
		this.model.finishOpen();
		this.model.close();
		this.equals(closeCounter, 1);
		this.equals(finishCloseCounter, 0);
		this.model.finishClose();
		this.equals(closeCounter, 1);
		this.equals(finishCloseCounter, 1);
		this.model.close();
		this.model.finishClose();
		this.equals(closeCounter, 1);
		this.equals(finishCloseCounter, 1);
	}

	public testAutoOpen() {
		this.model.autoOpen();

		let openCounter: number = 0;
		let finishOpenCounter: number = 0;
		this.model.signalOpenPage.add(() => openCounter++);
		this.model.signalFinishOpenPage.add(() => finishOpenCounter++);
		this.model.open(1);
		this.equals(openCounter, 1);
		this.equals(finishOpenCounter, 1);
		this.model.finishOpen();
		this.equals(openCounter, 1);
		this.equals(finishOpenCounter, 1);
		this.model.open(2);
		this.model.finishClose();
		this.model.open(4);
		this.equals(openCounter, 2);
		this.equals(finishOpenCounter, 2);
		this.model.finishOpen();
		this.model.finishOpen();
		this.equals(openCounter, 2);
		this.equals(finishOpenCounter, 2);

	}

	public testOpenPrev() {
		this.model.autoOpenAndClose();

		let openCounter: number = 0;
		let closeCounter: number = 0;
		this.model.signalOpenPage.add(() => openCounter++);
		this.model.signalClosePage.add(() => closeCounter++);
		this.model.open(1);
		this.equals(openCounter, 1);
		this.equals(closeCounter, 0);
		this.equals(this.model.page, 1);
		this.model.open(0);
		this.equals(openCounter, 2);
		this.equals(closeCounter, 1);
		this.equals(this.model.page, 0);
		this.model.openPrev();
		this.equals(openCounter, 3);
		this.equals(closeCounter, 2);
		this.equals(this.model.page, 1);
		this.model.openPrev();
		this.equals(openCounter, 4);
		this.equals(closeCounter, 3);
		this.equals(this.model.page, 0);
	}

}