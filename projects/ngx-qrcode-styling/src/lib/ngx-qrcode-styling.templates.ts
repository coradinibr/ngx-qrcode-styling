import { Options } from "./ngx-qrcode-styling.options";

export const Templates = (name: string) => {
    switch (name) {
        case 'classic':
            return {
                data: 'classic',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#202020',
                    type: 'classy'
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            } as Options;
        case 'ocean':
            return {
                data: 'ocean',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    type: 'dots',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#36CDA5'
                        }, {
                            offset: 1,
                            color: '#1582AE'
                        }, {
                            offset: 2,
                            color: '#0277BD'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersSquareOptions: {
                    type: 'square'
                }
            } as Options;
        case 'sunflower':
            return {
                data: 'sunflower',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    type: 'dots',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#BB8412'
                        }, {
                            offset: 1,
                            color: '#4D762E'
                        }, {
                            offset: 2,
                            color: '#2F702F'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#006B3B',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#006B3B',
                    type: 'extra-rounded'
                }
            } as Options;
        case 'luxury':
            return {
                data: 'luxury',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    type: 'classy-rounded',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#E29C0F'
                        }, {
                            offset: 1,
                            color: '#913C0C'
                        }, {
                            offset: 2,
                            color: '#732E0C'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#732E0C',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#732E0C',
                    type: 'extra-rounded'
                }
            } as Options;
        case 'bitcoin':
            return {
                data: 'bitcoin',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#3a3a3a',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#ff9900'
                },
                cornersSquareOptions: {
                    type: 'extra-rounded'
                }
            } as Options;
        case 'starbucks':
            return {
                data: 'starbucks',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#3a3a3a',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#00643C',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#00643C',
                    type: 'extra-rounded'
                }
            } as Options;
        case 'angular':
            return {
                data: 'angular',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#c3002f',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            } as Options;
        case 'facebook':
            return {
                data: 'facebook',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#4D72A9',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            } as Options;
        case 'jungle':
            return {
                data: 'jungle',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#416B2C',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#60A541',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    type: 'extra-rounded'
                }
            } as Options;
        case 'green':
            return {
                data: 'green',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#006B3B',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#006B3B',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#006B3B',
                    type: 'extra-rounded'
                }
            } as Options;
        case 'sky':
            return {
                data: 'sky',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#0567A2',
                    type: 'rounded'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#0277BD',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#075685',
                    type: 'extra-rounded'
                }
            } as Options;
        case 'mosaic':
            return {
                data: 'mosaic',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    type: 'rounded',
                    gradient: {
                        rotation: 190,
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: '#0277BD'
                        }, {
                            offset: 1,
                            color: '#943A40'
                        }, {
                            offset: 2,
                            color: '#A13535'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            } as Options;
        case 'coffee':
            return {
                data: 'coffee',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#5E4F39',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#FAEDE7",
                }
            } as Options;
        case 'vintage':
            return {
                data: 'vintage',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#2D7363',
                    type: 'extra-rounded'
                },
                backgroundOptions: {
                    color: "#E7E5C5",
                },
                cornersDotOptions: {
                    color: '#BE8C49',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#2D7363',
                    type: 'extra-rounded'
                }
            } as Options;
        case 'stamp':
            return {
                data: 'stamp',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#1C1E19',
                    type: 'square'
                },
                backgroundOptions: {
                    color: "#9BAC5A",
                },
                cornersDotOptions: {
                    color: '#AD081F',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#006B3B',
                    type: 'dot'
                }
            } as Options;
        case 'chess':
            return {
                data: 'chess',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#F4EAA5',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#494B49",
                }
            } as Options;
        default:
            return {
                data: 'classic',
                margin: 5,
                qrOptions: {
                    errorCorrectionLevel: 'H'
                },
                dotsOptions: {
                    color: '#202020',
                    type: 'classy'
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            } as Options;
    }
}