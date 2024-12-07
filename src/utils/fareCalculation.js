const fares = {
    bus: 1.8,
    zone1: 2.5,
    oneZoneOutside1: 2.0,
    twoZonesIncluding1: 3.0,
    twoZonesExcluding1: 2.25,
    threeZones: 3.2,
};

export const calculateFare = (startZone, endZone, isBus = false) => {
    if (isBus) return fares.bus;
    if (startZone === 1 && endZone === 1) return fares.zone1;
    if (startZone !== 1 && endZone !== 1) {
        if (Math.abs(startZone - endZone) === 1) return fares.twoZonesExcluding1;
        if (Math.abs(startZone - endZone) > 1) return fares.threeZones;
    }
    return fares.twoZonesIncluding1;
};
