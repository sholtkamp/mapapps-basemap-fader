/*
 * Copyright (C) 2017 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
    root: ({
        bundleName: "Basemap Fader",
        bundleDescription: "The Basemap Fader is a new Widget that allows you to fade two basemaps into each other.",
        ui: {
            title: "Basemap Fader",
            basemaps: "Basemaps",
            close: "Close",
            basemaps: {
                streets: "Street Map",
                topo: "Topographical Map",
                satellite: "Aerial (hybrid)",
                grey: "Grey",
                'dark-gray': "Dark Grey",
                oceans: "Oceans",
                'national-geographic': "National Geographic",
                terrain: "Terrain",
                osm: "Open Street Map"
            },
            basemap1: "Select a basemap",
            basemap2: "Select another basemap",
        },
        tool: {
            title: "Basemap Fader",
            tooltip: "Basemap Fader"
        }
    }),
    "de": true
};