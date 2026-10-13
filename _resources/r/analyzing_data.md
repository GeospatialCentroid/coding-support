---
layout: single
sidebar:
  nav: r_sidebar
title: "Analyzing Data"
toc: true
toc_sticky: true
---

## Introduction

While visualizations allow us to identify trends in data, we cannot make conclusive statements about these relationships without proper **data analysis**. RStudio offers a suite of commands through popular packages that allow us to access quick statistical summaries of our data. In this guide, we will look at introductory methods for working with analysis-ready data.

## Analysis Package

While R provides some built-in resources for data analysis, the **rstatix** package offers user-friendly functions for common statistical tests. The process for installing and loading this package is the same as for other R packages.

```r
install.packages("rstatix")
library(rstatix)
```

## Statistical Concepts for R

Before we begin computing statistics and examining relationships, let's review some important statistical concepts.

### Data Distribution

Data distribution describes how values are spread across a dataset. Three common distribution shapes are **approximately symmetric**, **left-skewed**, and **right-skewed**.

An approximately symmetric distribution is often shaped like a bell: most values cluster around the center, with fewer values toward either end. A normal distribution is one example of a symmetric distribution. Many statistical methods make assumptions about the distribution of the data, so it is important to examine it before choosing a test.

![Approximately symmetric distribution]({{ site.baseurl }}/r/images/Equal_Distribution.png?raw=true)

**Skewed data** has a longer tail on one side of the distribution.

![Left-skewed distribution]({{ site.baseurl }}/r/images/Left_Skew.png?raw=true)

In a **left-skewed** distribution, the tail extends toward the lower values, and most observations are concentrated toward the higher values.

![Right-skewed distribution]({{ site.baseurl }}/r/images/Right_Skew.png?raw=true)

Conversely, in a **right-skewed** distribution, the tail extends toward the higher values, and most observations are concentrated toward the lower values.

This information will be important when we examine **correlation** between variables and try to determine whether relationships are present. We will learn more about how to work with skewed data in later sections.

### P-values

P-values help us evaluate evidence against a null hypothesis. In this context, the null hypothesis might state that there is no relationship between two variables. If the p-value is sufficiently small, we may reject the null hypothesis. This does not automatically establish that the relationship is important or causal, and confounding variables may affect the results.

A commonly used significance threshold is 0.05. The p-value helps us decide whether the data provide enough evidence to reject the null hypothesis.

- **If the p-value is less than 0.05:** We usually call the result statistically significant and **reject the null hypothesis**. In plain language, the data provide evidence of an effect, difference, or relationship.
- **If the p-value is 0.05 or greater:** We **fail to reject the null hypothesis**. In plain language, the data do not provide sufficient evidence of a statistically significant effect, difference, or relationship at the chosen threshold.

It is important to understand what these statements do and do not mean. **Failing to reject the null hypothesis does not prove that there is no relationship.** The effect might be small, the sample might be too small, or the data might be too variable to provide clear evidence. Similarly, rejecting the null hypothesis does not prove that a relationship is important or that one variable causes another.

| Formal statistical wording | Clearer explanation |
|----------------------------|---------------------|
| Reject the null hypothesis | The data provide evidence of a statistically significant effect, difference, or relationship. |
| Fail to reject the null hypothesis | The data do not provide sufficient evidence of a statistically significant effect, difference, or relationship at the chosen threshold. |
| The null hypothesis cannot be rejected | The evidence is insufficient to rule out the possibility described by the null hypothesis. |
| There is no statistically significant relationship | The analysis did not find sufficient evidence of a relationship at the chosen significance threshold. |

Use the formal wording when reporting the statistical decision, and follow it with a plain-language explanation of what the result means in the context of your data.

### R-squared Values

R-squared (\(R^2\)) describes the proportion of variation in a response variable that is explained by a regression model. It is not generally a measure of the strength or direction of a relationship in every statistical context.

For a simple linear regression with an intercept, \(R^2\) ranges from 0 to 1:

| R-squared value | Meaning |
|-----------------|---------|
| 1 | The model explains all observed variation in the response variable. |
| 0 | The model explains none of the observed variation in the response variable. |

For correlation coefficients, by contrast, values range from -1 to 1. Values closer to -1 or 1 indicate a stronger linear association, while values near 0 indicate a weaker linear association. The interpretation depends on the measure being used and the context of the analysis.

### Linear Regression

 Linear regression models the relationship between a response variable and one or more predictor variables. In our [Visualizing Data](https://codingsupport.colostate.edu/r/visualizing_data/) section, you can see a graph with a fitted line passing through a series of plotted points. This line is a visualization of a simple linear regression model.

**Residuals** are the differences between observed values and the values predicted by the model. Examining residuals helps us assess how well a model fits the data and whether its assumptions are reasonable.

### Power and Sample Size

When analyzing data, sample size can have a significant impact. Smaller samples often produce less precise estimates, while larger samples can provide more precise estimates when other factors are comparable. A larger sample is not necessarily more representative if the sampling method is biased.

**Statistical power** is the probability that a statistical test will detect an effect of a specified size when that effect is present. Power depends on factors including sample size, effect size, significance threshold, and variability. In R, the `slice_sample()` function can be used to draw random samples from a dataset and explore how sample size affects results. This is a simulation exercise, not a way to change the power of an existing study after data has been collected.

## Categorical and Continuous Tests

Just as we use different visualizations for continuous and categorical data, we also use different statistical tests depending on the types of variables and the research question. We will now review a basic analysis workflow for categorical and continuous variables.

## Categorical Variables

### Association Tests

Before running statistical tests, we first want to identify variables for which a relationship may be present. We can explore relationships using visualizations and statistical tests. For example, box plots can help compare a continuous variable across categories, while a chi-square test can assess the association between two categorical variables.

For categorical datasets, we often compare groups defined by variables such as state, forest type, or gender. A **chi-square test of independence** evaluates whether two categorical variables are associated. Its null hypothesis is that the variables are independent.

The test compares observed counts with the counts expected if the variables were independent. A p-value below the chosen significance threshold, often 0.05, provides evidence against independence. Let's look at an example.

```r
library(rstatix)

analysis_data |>
  chisq_test(variable_one, variable_two)
```

The test output includes statistics and a p-value that help us decide whether to reject the null hypothesis. If the p-value is below your chosen significance threshold, the data provide evidence that the two categorical variables are associated. If the p-value is at or above that threshold, the analysis did not find sufficient evidence of an association. This does not prove that the variables are independent. The exact syntax can depend on the structure of the data and the version of the package; consult the `rstatix` documentation if your data are arranged differently.

If we want to compare a continuous response variable across categories, we may use a **t-test** or an **ANOVA**, depending on the number of groups and the assumptions of the test.

### Two-Group Comparisons

**T-tests** are commonly used to compare the means of a continuous variable between two groups. In a formula, the common format is `dependent_variable ~ independent_variable`.

```r
analysis_data |>
  t_test(variable_1 ~ variable_2)
```

A t-test does not determine whether data are “equally distributed.” Instead, the choice of test depends on the research design and assumptions, including independence of observations and, for the pooled Student's t-test, equal group variances. Welch's t-test is often a good default when equal variances cannot be assumed.

To assess whether group variances are similar, you can use Levene's test. It tests the null hypothesis that the group variances are equal.

```r
analysis_data |>
  levene_test(variable_1 ~ variable_2)
```

A small p-value suggests evidence that the group variances differ. Do not assume equal variance solely because a dataset has 5,000 or more observations; sample size alone does not establish equal variance. Use the test assumptions and the context of your data to choose an appropriate method.

After completing these steps, you can interpret the test results to evaluate whether the group means differ. Similar approaches can be used to examine more than two groups.

### Multiple-Group Comparisons

For comparisons across multiple groups, we can use an **ANOVA** when its assumptions are appropriate. If the assumptions are not met, a nonparametric alternative such as the Kruskal-Wallis test may be suitable.

A common workflow is to inspect the data, check assumptions, run an overall test, and then use a post hoc test if the overall result indicates differences among groups. For example, Shapiro-Wilk tests can be used to assess normality, though visual inspection and model diagnostics are also important.

```r
analysis_data |>
  group_by(variable_2) |>
  shapiro_test(variable_1)
```

The next steps depend on the research question and whether the assumptions are reasonably satisfied.

| Function | Typical use |
|----------|-------------|
| `kruskal_test()` | Compare groups when a nonparametric approach is appropriate |
| `anova_test()` | Compare group means using ANOVA |
| `dunn_test()` | Post hoc pairwise comparisons following a Kruskal-Wallis test |
| `tukey_hsd()` | Post hoc pairwise comparisons following ANOVA |

The commands follow a similar formula structure. Here, we will assume that an ANOVA is appropriate.

```r
analysis_data |>
  anova_test(variable_1 ~ variable_2)
```

The output summarizes the ANOVA results and indicates whether there is evidence of a difference among group means. If appropriate, use Tukey's HSD post hoc test to examine which pairs of groups differ.

```r
analysis_data |>
  tukey_hsd(variable_1 ~ variable_2)
```

The output lists pairwise comparisons between categories of `variable_2`, helping you identify which groups differ in the response variable. Interpret these results alongside effect sizes, confidence intervals, and the study context.

This is a brief introduction to analyzing categorical grouping variables. Next, we will look at similar processes for continuous variables.

## Continuous Variables

We will use a similar workflow for continuous variables:

- Explore relationships between variables.
- Examine distributions and model assumptions.
- Run an appropriate statistical test.
- Interpret the results in context.

The main difference is the way we measure and test relationships.

### Identify Correlation

One way to explore relationships between continuous variables is to **visualize the data**. A scatter plot can show whether variables tend to increase or decrease together, and whether the relationship appears linear. Visualization is useful before running tests because it can reveal outliers, nonlinearity, and other features that may affect the analysis.

You can also assess distributional assumptions. The Shapiro-Wilk test is one option for testing normality, but it should not be the only method used to assess distributions or decide which test to run.

The `cor_test()` function from the `rstatix` package can estimate the strength and direction of an association between two continuous variables.

```r
analysis_data |>
  cor_test(variable_1, variable_2, method = "pearson")
```

Two common correlation methods are:

- **Pearson** measures the strength and direction of a linear relationship. It is sensitive to outliers, and inference relies on assumptions that should be checked for the analysis.
- **Spearman** measures the strength and direction of a monotonic relationship using ranks. It can be useful when the relationship is not linear or when a rank-based method is more appropriate.

The correlation coefficient, often reported as `cor`, ranges from -1 to 1. Values closer to -1 or 1 indicate a stronger association; values near 0 indicate a weaker linear association for Pearson correlation. Correlation alone does not establish causation. If a relationship appears meaningful, you may choose to investigate it further with regression.

### Continuous Variable Analysis

To run a linear regression, we can use the `lm()` function.

```r
analysis_model <- lm(variable_1 ~ variable_2, data = analysis_data)

summary(analysis_model)
```

The `summary()` command provides information about the fitted model.

![Example linear regression results]({{ site.baseurl }}/r/images/Regression_Results.png?raw=true)

To assess evidence for a relationship between the predictor and response, look at the coefficient's p-value in the `Pr(>|t|)` column. A small p-value provides evidence that the coefficient differs from zero under the model's assumptions. In plain language, the data provide evidence of a linear association between the predictor and response. A large p-value means the analysis did not find sufficient evidence that the coefficient differs from zero; it does not prove that the relationship is absent.

The strength of the model can be summarized in part by its R-squared value, which describes the proportion of variation in the response explained by the model. A low R-squared value indicates that the model explains a relatively small proportion of the variation, even if a coefficient is statistically significant.

This process can be extended to multiple continuous predictors. It is also important to consider potential **confounding variables**. A confounder is related to both a predictor and the response and can distort the apparent relationship between them.

You can inspect correlations among selected variables with `cor()`:

```r
analysis_data |>
  select(variable_1, variable_2, variable_3) |>
  cor(use = "complete.obs")
```

This produces a correlation matrix showing the pairwise correlations among the selected variables. Strong correlations between predictors may indicate potential multicollinearity, but a correlation matrix alone cannot determine whether confounding is present. Consider the study design and relevant subject-matter knowledge as well.

Here is a simple example of multiple linear regression:

```r
analysis_model <- lm(
  variable_1 ~ variable_2 + variable_3,
  data = analysis_data
)

summary(analysis_model)
```

## Next Steps

One benefit of analyzing data in R is the potential to make predictions that inform future decisions. In a future section, we will look at how machine learning techniques can be used to create predictive models.
