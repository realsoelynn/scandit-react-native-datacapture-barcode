import React from 'react';
import { DataCaptureContext } from 'scandit-react-native-datacapture-core';
import { SparkScan } from 'scandit-datacapture-frameworks-barcode';
import { SparkScanViewSettings } from 'scandit-datacapture-frameworks-barcode';
import { Brush, Color } from 'scandit-react-native-datacapture-core';
import { SparkScanViewFeedback } from 'scandit-datacapture-frameworks-barcode';
interface SparkScanViewProps {
    context: DataCaptureContext;
    sparkScan: SparkScan;
    sparkScanViewSettings: SparkScanViewSettings;
    style: any;
}
export interface SparkScanViewUiListener {
    onBarcodeCountButtonTappedIn?(view: SparkScanView): void;
    onFastFindButtonTappedIn?(view: SparkScanView): void;
}
export declare class SparkScanView extends React.Component<SparkScanViewProps> {
    private viewProxy;
    uiListener: SparkScanViewUiListener | null;
    private _shouldShowScanAreaGuides;
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(newValue: boolean);
    static get defaultBrush(): Brush;
    private _brush;
    get brush(): Brush;
    set brush(newValue: Brush);
    private _torchButtonVisible;
    get torchButtonVisible(): boolean;
    set torchButtonVisible(newValue: boolean);
    private _scanningBehaviorButtonVisible;
    get scanningBehaviorButtonVisible(): boolean;
    set scanningBehaviorButtonVisible(newValue: boolean);
    private _handModeButtonVisible;
    get handModeButtonVisible(): boolean;
    set handModeButtonVisible(newValue: boolean);
    private _barcodeCountButtonVisible;
    get barcodeCountButtonVisible(): boolean;
    set barcodeCountButtonVisible(newValue: boolean);
    private _fastFindButtonVisible;
    get fastFindButtonVisible(): boolean;
    set fastFindButtonVisible(newValue: boolean);
    private _targetModeButtonVisible;
    get targetModeButtonVisible(): boolean;
    set targetModeButtonVisible(newValue: boolean);
    private _soundModeButtonVisible;
    get soundModeButtonVisible(): boolean;
    set soundModeButtonVisible(newValue: boolean);
    private _hapticModeButtonVisible;
    get hapticModeButtonVisible(): boolean;
    set hapticModeButtonVisible(newValue: boolean);
    private _stopCapturingText;
    get stopCapturingText(): string | null;
    set stopCapturingText(newValue: string | null);
    private _startCapturingText;
    get startCapturingText(): string | null;
    set startCapturingText(newValue: string | null);
    private _resumeCapturingText;
    get resumeCapturingText(): string | null;
    set resumeCapturingText(newValue: string | null);
    private _scanningCapturingText;
    get scanningCapturingText(): string | null;
    set scanningCapturingText(newValue: string | null);
    private _captureButtonActiveBackgroundColor;
    get captureButtonActiveBackgroundColor(): Color | null;
    set captureButtonActiveBackgroundColor(newValue: Color | null);
    private _captureButtonBackgroundColor;
    get captureButtonBackgroundColor(): Color | null;
    set captureButtonBackgroundColor(newValue: Color | null);
    private _captureButtonTintColor;
    get captureButtonTintColor(): Color | null;
    set captureButtonTintColor(newValue: Color | null);
    private _toolbarBackgroundColor;
    get toolbarBackgroundColor(): Color | null;
    set toolbarBackgroundColor(newValue: Color | null);
    private _toolbarIconActiveTintColor;
    get toolbarIconActiveTintColor(): Color | null;
    set toolbarIconActiveTintColor(newValue: Color | null);
    private _toolbarIconInactiveTintColor;
    get toolbarIconInactiveTintColor(): Color | null;
    set toolbarIconInactiveTintColor(newValue: Color | null);
    private _targetModeHintText;
    get targetModeHintText(): string | null;
    set targetModeHintText(newValue: string | null);
    private _shouldShowTargetModeHint;
    get shouldShowTargetModeHint(): boolean;
    set shouldShowTargetModeHint(newValue: boolean);
    private static get sparkScanDefaults();
    constructor(props: SparkScanViewProps);
    emitFeedback(feedback: SparkScanViewFeedback): void;
    componentWillUnmount(): void;
    prepareScanning(): void;
    startScanning(): void;
    pauseScanning(): void;
    stopScanning(): void;
    render(): React.JSX.Element;
    private update;
    toJSON(): object;
}
export {};
