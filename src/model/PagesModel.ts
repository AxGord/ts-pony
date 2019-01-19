import Event1 from '../events/Event1';
import Signal1 from '../events/Signal1';
import Tumbler from '../events/Tumbler';
import ModelBase from './ModelBase';

/**
 * PagesModel
 * @author AxGord <axgord@gmail.com>
 */
export default class PagesModel<T> extends ModelBase {

	private readonly eventOpenPage: Event1<T> = new Event1<T>();
	public readonly signalOpenPage: Signal1<T> = this.eventOpenPage.signal;

	private readonly eventClosePage: Event1<T> = new Event1<T>();
	public readonly signalClosePage: Signal1<T> = this.eventClosePage.signal;

	private readonly eventFinishOpenPage: Event1<T> = new Event1<T>();
	public readonly signalFinishOpenPage: Signal1<T> = this.eventFinishOpenPage.signal;

	private readonly eventFinishClosePage: Event1<T> = new Event1<T>();
	public readonly signalFinishClosePage: Signal1<T> = this.eventFinishClosePage.signal;

	public readonly hold: Tumbler = new Tumbler();

	private _page: T | null = null;
	private nextPage: T | null = null;
	private prevPage: T | null = null;
	private openProcess: boolean = false;
	private closeProcess: boolean = false;

	/**
	 * constructor
	 */
	public constructor(enabled: boolean = false) {
		super(enabled);
		this.regDestroy(this.destroyHandler, 5);
	}

	/**
	 * autoOpen
	 */
	public autoOpen(): void {
		this.signalOpenPage.removeAll();
		this.on1(this.signalOpenPage, this.finishOpen, -10);
	}

	/**
	 * autoClose
	 */
	public autoClose(): void {
		this.signalClosePage.removeAll();
		this.on1(this.signalClosePage, this.finishClose, -10);
	}

	/**
	 * disableAutoOpen
	 */
	public disableAutoOpen(): void {
		this.off1(this.signalOpenPage, this.finishOpen);
	}

	/**
	 * disableAutoClose
	 */
	public disableAutoClose(): void {
		this.off1(this.signalClosePage, this.finishClose);
	}

	/**
	 * autoOpenAndClose
	 */
	public autoOpenAndClose(): void {
		this.autoOpen();
		this.autoClose();
	}

	/**
	 * disableAutoOpenAndClose
	 */
	public disableAutoOpenAndClose(): void {
		this.disableAutoOpen();
		this.disableAutoClose();
	}

	/**
	 * get page
	 */
	public get page(): T | null { return this._page; }

	/**
	 * openPrev
	 */
	public openPrev(): void {
		if (this.prevPage !== null) {
			this.open(this.prevPage);
		} else {
			this.error(new Error('Not have prev page'));
		}
	}

	/**
	 * open
	 */
	public open(page: T): void {
		if (this.openProcess) return; // todo: fix this
		if (page === this.nextPage) return;
		if (this.close()) {
			this._open(page);
		} else {
			if (this.page) {
				this.nextPage = page;
				this.once1(this.signalFinishClosePage, this.finishClosePageHandler);
			} else {
				this._open(page);
			}
		}
	}

	private finishClosePageHandler(): void { if (this.nextPage) this._open(this.nextPage); }

	private _open(page: T): void {
		this.log('Open page: ' + page);
		this.openProcess = true;
		this._page = page;
		this.eventOpenPage.dispatch(page);
	}

	/**
	 * finishOpen
	 */
	public finishOpen(): void {
		if (this.openProcess) {
			this.openProcess = false;
			this.eventFinishOpenPage.dispatch(this.page as T);
		} else {
			this.error(new Error('Finish open error'));
		}
	}

	/**
	 * close
	 */
	public close(): boolean {
		if (this.closeProcess || this.openProcess) return false;
		if (this.page === null) return true;
		this.hold.disable();
		this.prevPage = this.page;
		this.log('Close page: ' + this.page);
		this.closeProcess = true;
		this.eventClosePage.dispatch(this.page);
		return false;
	}

	/**
	 * finishClose
	 */
	public finishClose(): void {
		if (this.closeProcess) {
			this.closeProcess = false;
			const p: T = this.page as T;
			this._page = null;
			this.eventFinishClosePage.dispatch(p);
		} else {
			this.error(new Error('Finish close error'));
		}
	}

	/**
	 * cancleNextPage
	 */
	public cancleNextPage(): void {
		if (!this.nextPage) return;
		this.nextPage = null;
		this.off1(this.signalFinishClosePage, this.finishClosePageHandler);
	}

	private destroyHandler(): void {
		this.close();
		this.eventOpenPage.destroy();
		this.eventClosePage.destroy();
		this.eventFinishOpenPage.destroy();
		this.eventFinishClosePage.destroy();
		delete this._page;
		// @ts-ignore
		delete this.eventOpenPage;
		// @ts-ignore
		delete this.eventClosePage;
		// @ts-ignore
		delete this.eventFinishOpenPage;
		// @ts-ignore
		delete this.eventFinishClosePage;
		// @ts-ignore
		delete this.signalOpenPage;
		// @ts-ignore
		delete this.signalClosePage;
		// @ts-ignore
		delete this.signalFinishOpenPage;
		// @ts-ignore
		delete this.signalFinishClosePage;
	}

}