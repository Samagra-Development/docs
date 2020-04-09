/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  someSidebar: {
    Guides: ['GettingStarted'],
    Components: [
      'ComponentsOverview',
      {
        'Mobile Application': [
          'COMobileApplication',
          'FormManagementPackage',
          'AndroidProfileManagementModule',
          'Grove',
        ],
      },
      {'App Metadata Management': ['COAppMetadata']},
      {'PDF Generator': ['COPDFGenerator']},
      {'Communication & Alerts': ['COCommunication']},
      {'Data Analytics': ['CODataAnalytics']},
      {'Security & Optimization': ['COSecurity']},
      {'Application Logging': ['COApplicationLogging']},
      {'Database Management': ['CODatabaseManagement', 'PSQLReplication']},
      {'Real Time Data Distribution': ['CORTDataDistribution']},
    ],
    Products: [
      'ProductsOverview',
      {
        Samiksha: [
          'SamikshaFuncSpecs',
          'ArchitectureSamiksha',
          'SetupSamiksha',
        ],
      },
      {Samwad: ['SamwadFuncSpecs', 'ArchitectureSamwad', 'SetupSamwad']},
      {
        Pariksha: [
          'ParikshaFuncSpecs',
          'ArchitecturePariksha',
          'SetupPariksha',
        ],
      },
    ],
  },
};
