'use strict'
var express = require('express');

function FolderData(title, element, subsName, subsManu){
  this.element = element;
  this.title = title;
  this.subsName = subsName;
  this.subsManu = subsManu;
}

let xmlmap = {};
loadFolderMap();

module.exports.getFolderMap = function getFolderMap(drugSubs) {
  updateFolderMap(drugSubs);
  let map = new Map();
  Object.keys(xmlmap).forEach(key => map.set(key, xmlmap[key]));
  return map;
};

function loadFolderMap() {
  xmlmap['m1'] = new FolderData('Administrative Information and Prescribing Information','m1-administrative-information-and-prescribing-information');
  xmlmap['m2'] = new FolderData('Common Technical Document Summaries','m2-common-technical-document-summaries');
  xmlmap['m2/22-intro'] = new FolderData('Introduction','m2-2-introduction');
  xmlmap['m2/22-intro/introduction.pdf'] = new FolderData('Introduction','m2-2-introduction');
  xmlmap['m2/23-qos'] = new FolderData('Quality Overall Summary','m2-3-quality-overall-summary');
  xmlmap['m2/23-qos/introduction.pdf'] = new FolderData('Introduction','m2-3-introduction');
  xmlmap['m2/23-qos/drug-substance.pdf'] = new FolderData('Drug Substance - <Name> - <Manufacturer>','m2-3-s-drug-substance');
  xmlmap['m2/23-qos/drug-product-name.pdf'] = new FolderData('Drug Product - <Name>','m2-3-p-drug-product');
  xmlmap['m2/23-qos/appendices.pdf'] = new FolderData('Appendices','m2-3-a-appendices');
  xmlmap['m2/23-qos/regional-information.pdf'] = new FolderData('Regional Information','m2-3-r-regional-information');
  xmlmap['m2/24-nonclin-over'] = new FolderData('Nonclinical Overview','m2-4-nonclinical-overview');
  xmlmap['m2/24-nonclin-over/nonclinical-overview.pdf'] = new FolderData('Nonclinical Overview','m2-4-nonclinical-overview');
  xmlmap['m2/25-clin-over'] = new FolderData('Clinical Overview','m2-5-clinical-overview');
  xmlmap['m2/25-clin-over/clinical-overview.pdf'] = new FolderData('Clinical Overview','m2-5-clinical-overview');
  xmlmap['m2/26-nonclin-sum'] = new FolderData('Nonclinical Written and Tabulated Summaries','m2-6-nonclinical-written-and-tabulated-summaries');
  xmlmap['m2/26-nonclin-sum/introduction.pdf'] = new FolderData('Introduction','m2-6-1-introduction');
  xmlmap['m2/26-nonclin-sum/pharmacol-written-summary.pdf'] = new FolderData('Pharmacology Written Summary','m2-6-2-pharmacology-written-summary');
  xmlmap['m2/26-nonclin-sum/pharmacol-tabulated-summary.pdf'] = new FolderData('Pharmacology Tabulated Summary','m2-6-3-pharmacology-tabulated-summary');
  xmlmap['m2/26-nonclin-sum/pharmkin-written-summary.pdf'] = new FolderData('Pharmacokinetics Written Summary','m2-6-4-pharmacokinetics-written-summary');
  xmlmap['m2/26-nonclin-sum/pharmkin-tabulated-summary.pdf'] = new FolderData('Pharmacokinetics Tabulated Summary','m2-6-5-pharmacokinetics-tabulated-summary');
  xmlmap['m2/26-nonclin-sum/toxicology-written-summary.pdf'] = new FolderData('Toxicology Written Summary','m2-6-6-toxicology-written-summary');
  xmlmap['m2/26-nonclin-sum/toxicology-tabulated-summary.pdf'] = new FolderData('Toxicology Tabulated Summary','m2-6-7-toxicology-tabulated-summary');
  xmlmap['m2/27-clin-sum'] = new FolderData('Clinical Summary','m2-7-clinical-summary');
  xmlmap['m2/27-clin-sum/summary-biopharm.pdf'] = new FolderData('Summary of Biopharmaceutic Studies and Associated Analytical Methods','m2-7-1-summary-of-biopharmaceutic-studies-and-associated-analytical-methods');
  xmlmap['m2/27-clin-sum/summary-clin-pharm.pdf'] = new FolderData('Summary of Clinical Pharmacology Studies','m2-7-2-summary-of-clinical-pharmacology-studies');
  xmlmap['m2/27-clin-sum/summary-clin-efficacy-indication1.pdf'] = new FolderData('Clinical Summary','m2-7-clinical-summary');
  xmlmap['m2/27-clin-sum/summary-clin-safety.pdf'] = new FolderData('Summary of Clinical Safety','m2-7-4-summary-of-clinical-safety');
  xmlmap['m2/27-clin-sum/literature-references.pdf'] = new FolderData('Literature References','m2-7-5-literature-references');
  xmlmap['m2/27-clin-sum/synopses-indiv-studies.pdf'] = new FolderData('Synopses of Individual Studies','m2-7-6-synopses-of-individual-studies');
  xmlmap['m1'] = new FolderData('Administrative Information and Prescribing Information','m1-administrative-information-and-prescribing-information');
  xmlmap['m3'] = new FolderData('Quality','m3-quality');
  xmlmap['m5'] = new FolderData('Clinical Study Reports','m5-clinical-study-reports');
  xmlmap['m3/32-body-data'] = new FolderData('Body of Data','m3-2-body-of-data');
  xmlmap['m3/32-body-data/32p-drug-prod'] = new FolderData('Drug Product (name, dosage form)','m3-2-p-drug-product');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1'] = new FolderData('Drug Product (name, dosage form) – Name','m3-2-p-drug-product');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p1-desc-comp'] = new FolderData('Description and Composition of the Drug Product (name, dosage form)','m3-2-p-1-description-and-composition-of-the-drug-product');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p1-desc-comp/description-and-composition.pdf'] = new FolderData('Description and Composition of the Drug Product (name, dosage form)','m3-2-p-1-description-and-composition-of-the-drug-product');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p2-pharm-dev'] = new FolderData('Pharmaceutical Development (name, dosage form)','m3-2-p-2-pharmaceutical-development');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p2-pharm-dev/pharmaceutical-development.pdf'] = new FolderData('Pharmaceutical Development (name, dosage form)','m3-2-p-2-pharmaceutical-development');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf'] = new FolderData('Manufacture (name, dosage form)','m3-2-p-3-manufacture');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/manufacturers.pdf'] = new FolderData('Manufacturer(s) (name, dosage form)','m3-2-p-3-manufactures');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/batch-formula.pdf'] = new FolderData('Batch Formula (name, dosage form)','m3-2-p-3-2-batch-formula');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/manuf-process-and-controls.pdf'] = new FolderData('Description of Manufacturing Process and Process Controls (name, dosage form)','m3-2-p-3-3-description-of-manufacturing-process-and-process-controls');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/control-critical-steps.pdf'] = new FolderData('Controls of Critical Steps and Intermediates (name, dosage form)','m3-2-p-3-4-controls-of-critical-steps-and-intermediates');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/process-validation.pdf'] = new FolderData('Process Validation and/or Evaluation (name, dosage form)','m3-2-p-3-5-process-validation-and-or-evaluation');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip'] = new FolderData('Control of Excipients (name, dosage form)', 'm3-2-p-4-control-of-excipients');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/specifications.pdf'] = new FolderData('Specifications (name, dosage form)', 'm3-2-p-4-1-specifications');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/analytical-procedures.pdf'] = new FolderData('Analytical Procedures (name, dosage form)','m3-2-p-4-2-analytical-procedures');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/validation-analyt-procedures.pdf'] = new FolderData('Validation of Analytical Procedures (name, dosage form)','m3-2-p-4-3-validation-of-analytical-procedures');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/justification-of-specifications.pdf'] = new FolderData('Justification of Specifications (name, dosage form)','m3-2-p-4-4-justification-of-specifications');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipients-human-animal.pdf'] = new FolderData('Excipients of Human or Animal Origin (name, dosage form)','m3-2-p-4-5-excipients-of-human-or-animal-origin');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/novel-excipients.pdf'] = new FolderData('Novel Excipients (name, dosage form)','m3-2-p-4-6-novel-excipients');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod'] = new FolderData('Control of Drug Product (name, dosage form)','m3-2-p-5-control-of-drug-product');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p51-spec'] = new FolderData('Specification(s) (name, dosage form)','m3-2-p-5-1-specifications');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p51-spec/specifications.pdf'] = new FolderData('Specification(s) (name, dosage form)','m3-2-p-5-1-specifications');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p52-analyt-proc'] = new FolderData('Analytical Procedures (name, dosage form)','m3-2-p-5-2-analytical-procedures');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p52-analyt-proc/analytical-procedure-1.pdf'] = new FolderData('Analytical Procedure – 1','m3-2-p-5-2-analytical-procedures');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p53-val-analyt-proc'] = new FolderData('Validation of Analytical Procedures (name, dosage form)','m3-2-p-5-3-validation-of-analytical-procedures');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p53-val-analyt-proc/validation-analytical-procedures-1.pdf'] = new FolderData('Validation of Analytical Procedures – 1','m3-2-p-5-3-validation-of-analytical-procedures');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p54-batch-analys'] = new FolderData('Batch Analyses (name, dosage form)','m3-2-p-5-4-batch-analyses');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p54-batch-analys/batch-analyses.pdf'] = new FolderData('Batch Analyses (name, dosage form)','m3-2-p-5-4-batch-analyses');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p55-charac-imp'] = new FolderData('Characterisation of Impurities (name, dosage form)','m3-2-p-5-5-characterisation-of-impurities');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p55-charac-imp/characterisation-impurities.pdf'] = new FolderData('Characterisation of Impurities (name, dosage form)','m3-2-p-5-5-characterisation-of-impurities');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p56-justif-spec'] = new FolderData('Justification of Specifications (name, dosage form)','m3-2-p-5-6-justification-of-specifications');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p56-justif-spec/justification-of-specifications.pdf'] = new FolderData('Justification of Specifications (name, dosage form)','m3-2-p-5-6-justification-of-specifications');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p6-ref-stand'] = new FolderData('Reference Standards or Materials (name, dosage form)','m3-2-p-6-reference-standards-or-materials');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p6-ref-stand/reference-standards.pdf'] = new FolderData('Reference Standards or Materials (name, dosage form)','m3-2-p-6-reference-standards-or-materials');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p7-cont-closure-sys'] = new FolderData('Container Closure System (name, dosage form)','m3-2-p-7-container-closure-system');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p7-cont-closure-sys/container-closure-system.pdf'] = new FolderData('Container Closure System (name, dosage form)','m3-2-p-7-container-closure-system');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab'] = new FolderData('Stability (name, dosage form)','m3-2-p-8-stability');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab/stability-summary.pdf'] = new FolderData('Stability Summary and Conclusion (name, dosage form)','m3-2-p-8-1-stability-summary-and-conclusion');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab/postapproval-stability.pdf'] = new FolderData('Post-approval Stability Protocol and Stability Commitment (name, dosage form)','m3-2-p-8-2-post-approval-stability-protocol-and-stability-commitment');
  xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab/stability-data.pdf'] = new FolderData('Stability Data (name, dosage form)','m3-2-p-8-3-stability-data');
  xmlmap['m3/32-body-data/32a-app'] = new FolderData('Appendices','m3-2-a-appendices');
  xmlmap['m3/32-body-data/32a-app/32a1-fac-equip'] = new FolderData('Facilities and Equipment (name, manufacturer)','m3-2-a-1-facilities-and-equipment');
  xmlmap['m3/32-body-data/32a-app/32a1-fac-equip/facilities-and-equipment-report-1.pdf'] = new FolderData('Facilities and Equipment Report 1','m3-2-a-1-facilities-and-equipment');
  xmlmap['m3/32-body-data/32a-app/32a2-advent-agent'] = new FolderData('Adventitious Agents Safety Evaluation (name, dosage form, manufacturer)','m3-2-a-2-adventitious-agents-safety-evaluation');
  xmlmap['m3/32-body-data/32a-app/32a2-advent-agent/adventitious-agents-report-1.pdf'] = new FolderData('Adventitious Agents Safety Evaluation Report 1','m3-2-a-2-adventitious-agents-safety-evaluation');
  xmlmap['m3/32-body-data/32a-app/32a2-advent-agent/adventitious-agents-report-2.pdf'] = new FolderData('Adventitious Agents Safety Evaluation Report 2','m3-2-a-2-adventitious-agents-safety-evaluation');
  xmlmap['m3/32-body-data/32a-app/32a3-excip-name-1'] = new FolderData('Excipients – Name','m3-2-a-3-excipients');
  xmlmap['m3/32-body-data/32a-app/32a3-excip-name-2'] = new FolderData('Excipients – Name','m3-2-a-3-excipients');
  xmlmap['m3/32-body-data/32r-reg-info'] = new FolderData('Regional Information','m3-2-r-regional-information');
  xmlmap['m3/32-body-data/32r-reg-info/regional-information.pdf'] = new FolderData('Regional Information','m3-2-r-regional-information');
  xmlmap['m3/33-lit-ref'] = new FolderData('Literature References','m3-3-literature-references');
  xmlmap['m3/33-lit-ref/reference-1.pdf'] = new FolderData('Reference 1','m3-3-literature-references');
  xmlmap['m3/33-lit-ref/reference-2.pdf'] = new FolderData('Reference 2','m3-3-literature-references');
  xmlmap['m4'] = new FolderData('Nonclinical Study Reports','m4-nonclinical-study-reports');
  xmlmap['m4/42-stud-rep'] = new FolderData('Study Reports','m4-2-study-reports');
  xmlmap['m4/42-stud-rep'] = new FolderData('Study Reports','m4-2-study-reports');
}

function updateFolderMap(drugSubs) {
  for(var drugSub of drugSubs){
    xmlmap['m3/32-body-data/32s-drug-sub'] = new FolderData('Drug Substance','m3-2-s-drug-substance', drugSub.Name, drugSub.Manufacturer);
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + ''] = new FolderData('Drug Substance - Drug Substance Name - Manufacturer','m3-2-s-drug-substance');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s1-gen-info'] = new FolderData('General Information (name, manufacturer)','m3-2-s-1-general-information');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s1-gen-info/nomenclature.pdf'] = new FolderData('Nomenclature (name, manufacturer)','m3-2-s-1-1-nomenclature');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s1-gen-info/structure.pdf'] = new FolderData('Structure (name, manufacturer)','m3-2-s-1-2-structure');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s1-gen-info/general-properties.pdf'] = new FolderData('General Properties (name, manufacturer)','m3-2-s-1-3-general-properties');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s2-manuf'] = new FolderData('Manufacture (name, manufacturer)','m3-2-s-2-manufacture');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s2-manuf/manufacturer.pdf'] = new FolderData('Manufacturer(s) (name, manufacturer)','m3-2-s-2-1-manufacturer');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s2-manuf/manuf-process-and-controls.pdf'] = new FolderData('Description of Manufacturing Process and Process Controls (name, manufacturer)','m3-2-s-2-2-description-of-manufacturing-process-and-process-controls');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s2-manuf/control-of-materials.pdf'] = new FolderData('Control of Materials (name, manufacturer)','m3-2-s-2-3-control-of-materials');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s2-manuf/control-critical-steps.pdf'] = new FolderData('Controls of Critical Steps and Intermediates (name, manufacturer)','m3-2-s-2-4-controls-of-critical-steps-and-intermediates');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s2-manuf/process-validation.pdf'] = new FolderData('Process Validation and/or Evaluation (name, manufacturer)','m3-2-s-2-5-process-validation-and-or-evaluation');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s2-manuf/manuf-process-development.pdf'] = new FolderData('Manufacturing Process Development (name, manufacturer)','m3-2-s-2-6-manufacturing-process-development');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s3-charac'] = new FolderData('Characterisation (name, manufacturer)','m3-2-s-3-characterisation');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s3-charac/elucidation-of-structure.pdf'] = new FolderData('Elucidation of Structure and Other Characteristics (name, manufacturer)','m3-2-s-3-1-elucidation-of-structure-and-other-characteristics');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s3-charac/impurities.pdf'] = new FolderData('Impurities (name, manufacturer)','m3-2-s-3-2-impurities');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub'] = new FolderData('Control of Drug Substance (name, manufacturer)','m3-2-s-4-control-of-drug-substance');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s41-spec'] = new FolderData('Specification (name, manufacturer)','m3-2-s-4-1-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s41-spec/specification.pdf'] = new FolderData('Specification (name, manufacturer)','m3-2-s-4-1-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s42-analyt-proc'] = new FolderData('Analytical Procedures (name, manufacturer)','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s42-analyt-proc/analytical-procedure-1.pdf'] = new FolderData('Analytical Procedure-1','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s42-analyt-proc/analytical-procedure-2.pdf'] = new FolderData('Analytical Procedure-2','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s42-analyt-proc/analytical-procedure-3.pdf'] = new FolderData('Analytical Procedure-3','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s43-val-analyt-proc'] = new FolderData('Validation of Analytical Procedures','m3-2-s-4-3-validation-of-analytical-procedures-name-manufacturer');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s43-val-analyt-proc/validation-analyt-procedure-1.pdf'] = new FolderData('Validation of Analytical Procedure-1','m3-2-s-4-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s43-val-analyt-proc/validation-analyt-procedure-2.pdf'] = new FolderData('Validation of Analytical Procedure-2','m3-2-s-4-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s43-val-analyt-proc/validation-analyt-procedure-3.pdf'] = new FolderData('Validation of Analytical Procedure-3','m3-2-s-4-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s44-batch-analys'] = new FolderData('Batch Analyses (name, manufacturer)','m3-2-s-4-4-batch-analyses');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s44-batch-analys/batch-analyses.pdf'] = new FolderData('Batch Analyses (name, manufacturer)','m3-2-s-4-4-batch-analyses');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s45-justif-spec'] = new FolderData('Justification of Specification (name, manufacturer)','m3-2-s-4-5-justification-of-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s4-contr-drug-sub/32s45-justif-spec/justification-of-specification.pdf'] = new FolderData('Justification of Specification (name, manufacturer)','m3-2-s-4-5-justification-of-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s5-ref-stand'] = new FolderData('Reference Standards or Materials (name, manufacturer)','m3-2-s-5-reference-standards-or-materials');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s5-ref-stand/reference-standards.pdf'] = new FolderData('Reference Standards or Materials (name, manufacturer)','m3-2-s-5-reference-standards-or-materials');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s6-cont-closure-sys'] = new FolderData('Container Closure System (name, manufacturer)','m3-2-s-6-container-closure-system');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s6-cont-closure-sys/container-closure-system.pdf'] = new FolderData('Container Closure System (name, manufacturer)','m3-2-s-6-container-closure-system');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s7-stab'] = new FolderData('Stability (name, manufacturer)','m3-2-s-7-stability');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s7-stab/stability-summary.pdf'] = new FolderData('Stability Summary and Conclusions (name, manufacturer)','m3-2-s-7-1-stability-summary-and-conclusions');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s7-stab/postapproval-stability.pdf'] = new FolderData('Post-approval Stability Protocol and Stability Commitment (name, manufacturer)','m3-2-s-7-2-post-approval-stability-protocol-and-stability-commitment');
    xmlmap['m3/32-body-data/32s-drug-sub/' + drugSub.Folder + '/32s7-stab/stability-data.pdf'] = new FolderData('Stability Data (name, manufacturer)','m3-2-s-7-3-stability-data');
  }
  
};
